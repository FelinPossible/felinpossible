<?php
/**
 * Zend Framework
 *
 * LICENSE
 *
 * This source file is subject to the new BSD license that is bundled
 * with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://framework.zend.com/license/new-bsd
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@zend.com so we can send you a copy immediately.
 *
 * @category   Zend
 * @package    Zend_XmlRpc
 * @subpackage Value
 * @copyright  Copyright (c) 2005-2009 Zend Technologies USA Inc. (http://www.zend.com)
 * @license    http://framework.zend.com/license/new-bsd     New BSD License
 * @version    $Id: Array.php 19561 2009-12-10 03:08:58Z lars $
 */


/**
 * Zend_XmlRpc_Value_Collection
 */
require_once 'Zend/XmlRpc/Value/Collection.php';


/**
 * @category   Zend
 * @package    Zend_XmlRpc
 * @subpackage Value
 * @copyright  Copyright (c) 2005-2009 Zend Technologies USA Inc. (http://www.zend.com)
 * @license    http://framework.zend.com/license/new-bsd     New BSD License
 */
class Zend_XmlRpc_Value_Array extends Zend_XmlRpc_Value_Collection
{
    /**
     * Set the value of an array native type
     *
     * @param array $value
     */
    public function __construct($value)
    {
        $this->_type = self::XMLRPC_TYPE_ARRAY;
        parent::__construct($value);
    }


    /**
     * Generate the XML code that represent an array native MXL-RPC value
     *
     * @return void
     */
    protected function _generateXml()
    {
        $generator = $this->getGenerator();
        $generator->startElement('value')
                  ->startElement('array')
                  ->startElement('data');

        if (is_array($this->_value)) {
            foreach ($this->_value as $val) {
                $val->generateXml();
            }
        }
        $generator->endElement('data')
                  ->endElement('array')
                  ->endElement('value');

        $this->_xml = (string)$generator;
    }
}

