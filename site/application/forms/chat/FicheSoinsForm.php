<?php
/**
 * Formulaire pour la fiche de chat.
 * @author Benjamin
 *
 */
class FP_Form_chat_FicheSoinsForm extends FP_Form_common_Form {
   
	/**
	 * (non-PHPdoc)
	 * @see site/library/Zend/Zend_Form#init()
	 */
    public function init() {
        // Set the method for the display form to POST
        $this->setMethod('post');
        $this->setName('ficheSoins');
        $this->setAttrib('class', 'formOrange');
        
        $nom = new Zend_Form_Element_Text('nom');
		$nom->setLabel('Nom');
		$nom->setFilters(array('StringTrim'));

		$qualite = new Zend_Form_Element_Text('qualite');
		$qualite->setLabel('Qualité');
		$qualite->setFilters(array('StringTrim'));
		
		$adresse = new Zend_Form_Element_Text('adresse');
		$adresse->setLabel('Adresse');
		$adresse->setAttrib('size', 60);
		$adresse->setFilters(array('StringTrim'));
		
		$codePostal = new Zend_Form_Element_Text('codePostal');
		$codePostal->setLabel('Code Postal');
		$codePostal->setFilters(array('StringTrim'));
		
		$ville = new Zend_Form_Element_Text('ville');
		$ville->setLabel('Ville');
		$ville->setFilters(array('StringTrim'));
		
		$telFixe = new Zend_Form_Element_Text('telephoneFixe');
		$telFixe->setLabel('Téléphone fixe');
		$telFixe->setFilters(array('StringTrim'));
		
		$telMobile = new Zend_Form_Element_Text('telephonePortable');
		$telMobile->setLabel('Téléphone portable');
		$telMobile->setFilters(array('StringTrim'));
		
		$nomChat = new Zend_Form_Element_Text('nomChat');
		$nomChat->setLabel('Nom du chat');
		$nomChat->setFilters(array('StringTrim'));
		
		$couleurChat = new Zend_Form_Element_Text('couleur');
		$couleurChat->setLabel('Couleur du chat');
		$couleurChat->setFilters(array('StringTrim'));
		
		$identification = new Zend_Form_Element_Text('identification');
		$identification->setLabel('Identification');
		$identification->setFilters(array('StringTrim'));
		
		$dateNaissance = new Zend_Form_Element_Text('dateNaissance');
		$dateNaissance->setLabel('Date de naissance');
		$dateNaissance->setFilters(array('StringTrim'));
		
		$sexe = new Zend_Form_Element_Text('sexe');
		$sexe->setLabel('Sexe');
		$sexe->setFilters(array('StringTrim'));
		
		$soinPuce = new Zend_Form_Element_Checkbox('soinPuce');
		$soinPuce->setLabel('Identification (puce) à faire');
		
		$soinTatouage = new Zend_Form_Element_Checkbox('soinTatouage');
		$soinTatouage->setLabel('Identification (tatouage) à faire');
		
		$soinVaccins = new Zend_Form_Element_Checkbox('soinVaccins');
		$soinVaccins->setLabel('Vaccins TCL à faire');
		
		$soinTests = new Zend_Form_Element_Checkbox('soinTests');
		$soinTests->setLabel('Tests FIV/FELV à faire');
		
		$soinAutre = new Zend_Form_Element_Text('soinAutre');
		$soinAutre->setLabel('Autre soin(s) à faire');
		$soinAutre->setAttrib('size', 60);
		$soinAutre->setFilters(array('StringTrim'));
		
		$soinSterilisation = new Zend_Form_Element_Checkbox('soinSterilisation');
		$soinSterilisation->setLabel('Ovariectomie / Hystérectomie / Castration à faire');
		
		$veto = new Zend_Form_Element_Select('idVeto');
		$veto->setLabel('Vétérinaire');
		$veto->addMultiOptions(FP_Model_Mapper_MapperFactory::getInstance()->vetoMapper->buildArrayForForm());
		
		$idChat = new Zend_Form_Element_Hidden('id');
		
        $this->addElement($nom);
        $this->addElement($qualite);
        $this->addElement($adresse);
        $this->addElement($ville);
        $this->addElement($codePostal);
        $this->addElement($telFixe);
        $this->addElement($telMobile);
        $this->addElement($nomChat);
        $this->addElement($couleurChat);
        $this->addElement($identification);
        $this->addElement($dateNaissance);
        $this->addElement($sexe);
        $this->addElement($veto);
        $this->addElement($soinPuce);
        $this->addElement($soinTatouage);
        $this->addElement($soinTests);
        $this->addElement($soinVaccins);
        $this->addElement($soinSterilisation);
        $this->addElement($soinAutre);
        $this->addElement($idChat);
                
		// Add the submit button
        $this->addElement('submit', 'submit', array(
            'ignore'   => true,
            'label'    => 'Générer la fiche',
        ));
    }
   
}