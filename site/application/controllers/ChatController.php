<?php
/**
 * Controller pour les chats.
 * @author Benjamin
 *
 */
class ChatController extends FP_Controller_CommonController
{
	/**
	 * Retourne le service associé au controller.
	 * @return FP_Service_ChatServices
	 */
	private function getService() {
		return FP_Service_ChatServices::getInstance();
	}

	/**
	 * Affiche les chats à l'adoption.
	 */
	public function adoptionAction() {
		$this->view->entries = $this->getService()->getChatsAdoption();
	}

	/**
	 * Affiche les chats adoptés avec pagination.
	 */
	public function adoptesAction() {
		$result = $this->getService()->getChatsAdoptes($this->getRequest()->getParams());

		$this->view->entries = $result[FP_Util_PaginationConstantes::DATA_KEY];
		$this->view->paginator = $result[FP_Util_PaginationConstantes::PAGINATOR_KEY];
	}

	/**
	 * Affiche les vignettes des chats à parrainer.
	 */
	public function parrainerAction() {
		$this->view->entries = $this->getService()->getChatsAParrainer();
	}

	/**
	 * Affiche les vignettes des chats disparus.
	 */
	public function disparusAction() {
		$this->view->entries = $this->getService()->getChatsDisparus();
	}

	/**
	 * Affiche la bulle contenant les informations du chat
	 */
	public function bulleAction() {
		$chatId = $this->_getParam('id');
		
		if ($chatId) {
			$this->view->chat = $this->getService()->getElement($chatId);
		}
	}

	/**
	 * Retourne la liste des fiches de chat pour l'admin au format json.
	 */
	public function listeAction () {
		if ($this->checkIsLogged()) {
			$request = $this->getRequest();
			echo $this->getService()->getJsonData($request->getParams());
			exit;
		}
	}

	/**
	 * Initialisation des urls pour l'admin.
	 */
	private function initUrlForAdmin() {
		$action = $this->getRequest()->getParam('action');

		$this->view->urlListeJson = $this->view->url(array('action' => 'liste'));
		$this->view->urlAddItem = $this->view->url(array('action' => 'add', 'callback' => $action));
		$this->view->urlEditItem = $this->view->url(array('action' => 'edit', 'callback' => $action));
		$this->view->urlDeleteItem = $this->view->url(array('action' => 'delete'));
		$this->view->urlSelectFaItem = $this->view->url(array('controller' => 'fa', 'action' => 'changerfa', 'callback' => $action));
		$this->view->urlSelectAdItem = $this->view->url(array('controller' => 'adoptant', 'action' => 'choisirad', 'callback' => $action));
		$this->view->urlDeleteFa = $this->view->url(array('controller' => 'fa', 'action' => 'deletechat'));
		$this->view->urlDeleteAd = $this->view->url(array('controller' => 'adoptant', 'action' => 'deletechat'));
		$this->view->urlGenererFicheSoins = $this->view->url(array('action' => 'fichesoins'));

                $this->view->urlEditLightItem = $this->view->url(array('action' => 'editLight', 'callback' => $action));
		
		$this->view->defaultSort = 3;

		$this->view->headerPath = "chat/headeradm.phtml";
		$this->view->class = "ficheChat";
		$this->view->redefineButtons = "chat/gridactions.phtml";
	}

	/**
	 * Index de la partie admin pour les fiches des chats.
	 */
	public function indexadmAction() {
		if ($this->checkIsLogged()) {
			$this->initUrlForAdmin();

			$this->view->titre = "Fiches des chats";
			$this->view->urlExportUrl = $this->view->url(array('action' => 'export'));
			$this->view->filterPath = 'chat/filterchat.phtml';
			$this->view->gridName = "commonGrid";
			$this->view->initFilter = "{adopte : 0, disparu : 0}";
			$this->view->defaultSort = 3;
			$this->view->nbElements = $this->getService()->getNbElementsForGrid();

			$this->render("indexgrid");
		}
	}

	/**
	 * Action pour ajouter une nouvelle fiche.
	 */
	public function addAction() {
		if ($this->checkIsLogged()) {
			$request = $this->getRequest();
			$form = new FP_Form_chat_Form();
			// Check to see if this action has been POST'ed to.
			if ($request->isPost()) {
				if ($form->isValid($request->getPost())) {
					$this->getService()->save($form->getValues());
					$callback = $request->getParam('callback', 'indexadm');
					return $this->_helper->redirector($callback);
				}
			}

			$this->view->urlMaj = $this->view->url(array('action' => 'maj', 'id' => $form->id->getValue()));
			$form->setAction('javascript:callAjax("'.$this->view->url(array('action' => 'add')).'", null, null,"'.$form->getId().'")');
			$this->view->form = $form;
		}
	}

	/**
	 * Suppression d'une fiche de chat (partie admin).
	 */
	public function deleteAction() {
		if ($this->checkIsLogged()) {
			$id = $this->getRequest()->getParam("id");
			$this->getService()->deleteElement($id);
			exit;
		}
	}

	/**
	 * Action pour éditer une fiche.
	 */
	public function editAction() {
		if ($this->checkIsLogged()) {
			$request = $this->getRequest();
			$form = new FP_Form_chat_Form();
			$chatId = $request->getParam('id', null);

			if ($chatId) {
				$data = $this->getService()->getData($chatId);
				$form->populate($data);
				$form->setAction('javascript:callAjax("'.$this->view->url(array('controller' => 'chat', 'action' => 'add')).'", null, null,"'.$form->getId().'")');
				$this->view->form = $form;
				$this->view->urlMaj = $this->view->url(array('action' => 'maj', 'id' => $chatId));
				$this->render("add");
				return;
			}
			exit;
		}
	}

        	/**
	 * Action pour éditer une fiche.
	 */
	public function editlightAction() {
		if ($this->checkIsLogged()) {
			$request = $this->getRequest();
                        include_once(realpath(APPLICATION_PATH . '/forms/chat/LightForm.php')) ;
			$form = new FP_Form_chat_lightForm();
			$chatId = $request->getParam('id', null);

			if ($chatId) {
				$data = $this->getService()->getData($chatId);
				$form->populate($data);
				$form->setAction('javascript:callAjax("'.$this->view->url(array('controller' => 'chat', 'action' => 'addlight')).'", null, null,"'.$form->getId().'")');
				$this->view->form = $form;
				//$this->view->urlMaj = $this->view->url(array('action' => 'maj', 'id' => $chatId));
				$this->render("add");
				return;
			}
			exit;
		}
	}
        
        
        	/**
	 * Action pour ajouter une nouvelle fiche.
	 */
	public function addlightAction() {
		if ($this->checkIsLogged()) {
			$request = $this->getRequest();
                        include_once(realpath(APPLICATION_PATH . '/forms/chat/LightForm.php')) ;
			$form = new FP_Form_chat_lightForm();
			// Check to see if this action has been POST'ed to.
			if ($request->isPost()) {
				if ($form->isValid($request->getPost())) {
					$this->getService()->save($form->getValues());
					$callback = 'vpa';//$request->getParam('callback', 'indexadm');
					return $this->_helper->redirector($callback);
				}
			}

			//$this->view->urlMaj = $this->view->url(array('action' => 'maj', 'id' => $form->id->getValue()));
			$form->setAction('javascript:callAjax("'.$this->view->url(array('action' => 'addlight')).'", null, null,"'.$form->getId().'")');
			$this->view->form = $form;
		}
	}
        
        
	/**
	 * Action pour la maj d'une fiche à partir du forum.
	 */
	public function majAction() {
		if ($this->checkIsLogged()) {
			$request = $this->getRequest();
			$form = new FP_Form_chat_Form();
			$chatId = $request->getParam('id', null);
			if ($chatId) {
				$data = $this->getService()->getInfosFromPostId($chatId);
				$form->populate($data);
				$form->setAction('javascript:callAjax("'.$this->view->url(array('action' => 'add')).'", null, null, "'.$form->getId().'")');
				$this->view->form = $form;
				$this->view->urlMaj = $this->view->url(array('action' => 'maj', 'id' => $chatId));
				$this->render("add");
				return;
			}
			exit;
		}
	}
       
	/**
	 * Affiche la table de rappels de vaccins à venir
	 */
	public function vaccinsAction() {
		if ($this->checkIsLogged()) {
			$this->initUrlForAdmin();

			$this->view->titre = "Rappels de vaccins à venir";
			$this->view->defaultSort = 8;
			$this->view->headerPath = "chat/headervaccins.phtml";
			$this->view->urlListeJson = $this->view->url(array('action' => 'liste', FP_Util_Constantes::WHERE_KEY => FP_Util_Constantes::CHAT_AVEC_DATE_VACCINS, 'sort' => 'nom'));
			$this->view->urlEnvoiMailItem = $this->view->url(array('action' => 'mailvaccins'));
			$this->view->urlIncrDateItem =  $this->view->url(array('action' => 'incrdatevaccins'));
			$this->view->nbElements = $this->getService()->getNbFiches(FP_Util_Constantes::CHAT_AVEC_DATE_VACCINS);
			$this->view->filterPath = 'chat/filterchat.phtml';
			$this->view->gridName = "commonGrid";
		}
	}

	/**
	 * Affiche la table des stérilisations à venir.
	 */
	public function sterilisationsAction() {
		if ($this->checkIsLogged()) {
			$this->initUrlForAdmin();

			$this->view->titre = "Stérilisations à faire";
			$this->view->defaultSort = 9;

			$this->view->headerPath = "chat/headersterilisation.phtml";
			$this->view->urlListeJson = $this->view->url(array('action' => 'liste', FP_Util_Constantes::WHERE_KEY => FP_Util_Constantes::CHAT_A_STERILISER, 'sort' => 'nom'));
			$this->view->urlEnvoiMailItem = $this->view->url(array('action' => 'mailsterilisation'));
			$this->view->nbElements = $this->getService()->getNbFiches(FP_Util_Constantes::CHAT_A_STERILISER);
			$this->view->filterPath = 'chat/filterchat.phtml';
			$this->view->gridName = "commonGrid";
		}
	}

    /**
	 * Affiche les changements de priopriétaires à faire.
	 */
	public function proprietaireAction() {
		if ($this->checkIsLogged()) {
			$this->initUrlForAdmin();

			$this->view->titre = "Changement de propriétaire à faire";
			$this->view->defaultSort = -8;

			$this->view->headerPath = "chat/headerproprietaire.phtml";
			$this->view->urlListeJson = $this->view->url(array('action' => 'liste', FP_Util_Constantes::WHERE_KEY => FP_Util_Constantes::CHAT_CHGT_PROPRIETAIRE, 'sort' => 'nom'));
			$this->view->nbElements = $this->getService()->getNbFiches(FP_Util_Constantes::CHAT_CHGT_PROPRIETAIRE);
			$this->view->filterPath = 'chat/filterchat.phtml';
			$this->view->gridName = "commonGrid";
		}
	}

            /**
	 * Affiche les vpa à faire.
	 */
	public function vpaAction() {
		if ($this->checkIsLogged()) {
			$this->initUrlForAdmin();
			$this->view->titre = "VPA à faire";
			$this->view->defaultSort = 6;
			$this->view->headerPath = "chat/headervpa.phtml";
			$this->view->urlListeJson = $this->view->url(array('action' => 'liste', FP_Util_Constantes::WHERE_KEY => FP_Util_Constantes::CHAT_VPA_A_FAIRE,'order' => 'desc'));
			$this->view->nbElements = $this->getService()->getNbFiches(FP_Util_Constantes::CHAT_VPA_A_FAIRE);
			$this->view->nbVpasNonAff = $this->getService()->getNbFiches(FP_Util_Constantes::CHAT_VPA_NON_AFFECTEES);
			$this->view->gridName = "commonGrid";
		}
	}
        
	/**
	 * Affichage du formulaire d'envoi
	 */
	public function mailvaccinsAction() {
		if ($this->checkIsLogged()) {
			$request = $this->getRequest();
			$form = new FP_Form_common_MailForm();
			$idChat = $request->getParam('id', null);

			if ($request->isPost()) {
				if ($form->isValid($request->getPost())) {
					FP_Service_MailServices::getInstance()->envoiMail($form->getValues());
					$this->getService()->updateDateRappelVaccins($idChat);
					return $this->_helper->redirector('vaccins');
				}
			} else {
				$form->populate($this->getService()->getDataForMailVaccins($idChat));
			}
		}
		$form->setAction('javascript:callAjax("'.$this->view->url(array('action' => 'mailvaccins')).'", null, null, "'.$form->getId().'")');
		$this->view->form = $form;
	}

	/**
	 * Affichage du formulaire d'envoi pou le rappel de la stérilisation.
	 */
	public function mailsterilisationAction() {
		if ($this->checkIsLogged()) {
			$request = $this->getRequest();
			$form = new FP_Form_common_MailForm();
			$idChat = $request->getParam('id', null);

			if ($request->isPost()) {
				if ($form->isValid($request->getPost())) {
					FP_Service_MailServices::getInstance()->envoiMail($form->getValues());
					$this->getService()->updateDateRappelSter($idChat);
					return $this->_helper->redirector('sterilisations');
				}
			} else {
				$form->populate($this->getService()->getDataForMailSterilisation($idChat));
			}
		}
		$form->setAction('javascript:callAjax("'.$this->view->url(array('action' => 'mailsterilisation')).'", null, null, "'.$form->getId().'")');
		$this->view->form = $form;
	}

	/**
	 * Incrémente la date du rappel de vaccins pour le chat sélectionné.
	 */
	public function incrdatevaccinsAction() {
		if ($this->checkIsLogged()) {
			$id = $this->getRequest()->getParam("id");
			$this->getService()->incrDateRappelVaccins($id);
			exit;
		}
	}

	/**
	 * Export excel pour les chats à l'adoption.
	 */
	public function exportadoptionAction() {
		if ($this->checkIsLogged()) {
			$workbook = FP_Service_ExportServices::getInstance()->buildExcelChatAdoption();
			exit;
		}
	}

	/**
	 * Export excel pour les tous les chats.
	 */
	public function exportAction() {
		if ($this->checkIsLogged()) {
			$workbook = FP_Service_ExportServices::getInstance()->buildExcelAllChats();
			exit;
		}
	}

	/**
	 * Action pour ouvrir la page de génération de fiche de soins.
	 */
	public function fichesoinsAction() {
		if ($this->checkIsLogged()) {
			$request = $this->getRequest();
			$form = new FP_Form_chat_FicheSoinsForm();

			$chatId = $request->getParam('id', null);

			if ($chatId) {
				$data = $this->getService()->getDataFicheSoins($chatId);
				$form->populate($data);
			}

			$form->setAction($this->view->url(array('action' => 'generefichesoins')));
			$this->view->form = $form;
		}
	}


	/**
	 * Action pour générer une fiche de soins pour le chat sélectionné.
	 */
	public function generefichesoinsAction() {
		if ($this->checkIsLogged()) {
			$request = $this->getRequest();
			$form = new FP_Form_chat_FicheSoinsForm();
			if ($request->isPost()) {
				if ($form->isValid($request->getPost())) {
					$this->getService()->generateFicheSoinsFPDF($form);
				}
			}
		}
		exit;
	}

	/**
	 * Affichage des chats à adoptés (sans les réservés) pour impression.
	 */
	public function tableauadoptesAction() {
		$this->view->entries = $this->getService()->getChatsAdoptionNonReserves();
		$this->view->nbChatsParLigne = 5;
	}
        
        
   	/**
	* Affichage du formulaire de recherche des chats à adopter.
	*/ 
        public function chercherAction() {
                $form = new FP_Form_chat_ChercherForm();
                $form->setAction($this->view->url(array('action' => 'resultats')));
                $this->view->form = $form;
        } 
        

   	/**
	* Affichage des résultats de recherche des chats à adopter.
	*/ 
        public function resultatsAction() {
             $request = $this->getRequest();
             $form = new FP_Form_chat_ChercherForm();
             if ($form->isValid($request->getPost())) {
                                        $t = array();
                                        $t[0]=$this->getService()->getChatsAdoptionNonReservesFiltres($request->getPost(),'match');
                                        $t[1]=$this->getService()->getChatsAdoptionNonReservesFiltres($request->getPost(),'maybe');
					$this->view->entries = $t;
				}
         }
}
