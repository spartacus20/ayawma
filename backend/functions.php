<?php


    // CONEXION CODE

    function getEnvironmentVariables($key){
        if(!defined('_ENV_CACHE')){
            $file = "ENV.php"; 
            if(!file_exists($file)){
                throw new Exception("El file is not exits ($file)");
            } 

            $vars = parse_ini_file($file);
            define("_ENV_CACHE", $vars); 

        }  
        if(!isset($_ENV[$key])){
            throw new Exception("The key $key is not defined"); 
        }

        return $_ENV[$key];   
    }

    function getBDConexion(){
        $bdName = getEnvironmentVariables("DATABASE");
        $user = getEnvironmentVariables("USER");
        $password =  getEnvironmentVariables("PASSWORD");

        $conn = new PDO("mysql:host=".$bdName.";dbname=".$user."", $user, $password);

        if(!$conn){
            throw new Exception("Could not connect to the database");
        }

        return $conn;
    }



    // PRODUCTS CODE 

    function getProducts(){

        $conn = getBDConexion();
        $Table = $conn->exec("SELECT * FROM products"); 
        return $Table; 
    
    }
    
    function getSearchResult($product){
        $conn = getBDConexion();
        $productlist = $conn->exec("SELECT * FROM products where name = ".$product." and description = ".$product."");
        return $productlist->fetchAll();
    }
     
  






    //USER CODE


    function RegisterUser($email, $password){
      
        $conn = getBDConexion();
       
       
        $validate =  $conn->exec("SELECT * from users WHERE email=".$email.""); 
        
        if($validate <= 0 ){
         throw new Exception("This user is already registered.");
        }

        $newUser = $conn->prepare("INSERT INTO users (email, password) VALUES (?, ?)")
        $newUser = $conn->exec([$email, md5($password)]);
    
        return $newUser;
    

    }



    function LoginUser($email, $password){

        $conn = getBDConexion();
        $Users = $conn->exec("SELECT * FROM users WHERE email=".$email." AND password=".$password.""); 
        
        if($Users <= 0) {
          throw new Exception("Email or password is not valid"); 
        }
        return true;

    }


?>






