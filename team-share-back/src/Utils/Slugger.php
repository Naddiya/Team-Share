<?php

namespace App\Utils;

class Slugger {

    private $toLower;

    public function __construct($toLower) 
    {
       //va me permettre de conditionner la creation de mon slugger avec sa casse d'origine ou en miniscule
       $this->toLower = $toLower;
    }

    public function slugify(string $strToConvert){

        //si true je convertit ma chaine en minuscule
        if($this->toLower){
            $strToConvert = strtolower($strToConvert);
        }

       //cette fonction permet de remplacer dans une chaine tout les espace + caractere speciaux minimaux en - pour que notre slug soit valide
       // elle contient aussi les methodes strtolower + trim + strip_tags qui permettent de netoyyer la chaine avant remplacement 
       $convertedString = preg_replace( '/[^a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*/', '-', trim(strip_tags($strToConvert)) ); 

       return $convertedString;
    }
}
