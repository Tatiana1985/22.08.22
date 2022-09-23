<?php
class Person
{
  private $name;
  private $lastname;
  private $age;
  private $hp;
  private $mother;
  private $father;

  function __construct($name, $lastname, $age, $mother=null, $father=null)
  {
    $this->name = $name;
    $this->lastname = $lastname;
    $this->age = $age;
    $this->mother = $mother;
    $this->father = $father;
    $this->hp = 100;
  }
  function sayHi($name)
  {
    return "Hi, $name, I`m " . $this->name;
  }
  function setHp($hp) {
    if ($this->hp + $hp >= 100) $this->hp = 100;
    else $this->hp = $this->hp + $hp;
  }
  function getHp() {
    return $this->hp;
  }
  function getName() {
    return $this->name;
  }
  function getMother() {
    return $this->mother;
  }
  function getFather() {
    return $this->father;
  }
  function getLastname() {
    return;
  }
  function getInfo() {
    return "
    <h3>A few words about myself:</h3><br>"."My name is: ".$this->getName()."<br>my lastname is: ".$this->getLastname()."<br>my father is: ".$this->getFather()->getName()."";

  }
}


$igor = new Person("Igor", "Petrov", 68);

$alex = new Person("Alex", "Ivanov", 42);
$olga = new Person("Olga", "Ivanova", 42, null, $igor);
$valera = new Person("Valera", "Ivanov", 15, $olga, $alex);

echo $valera->getInfo();
// echo $valera->getMother()->getFather()->getName();

// //Здоровье не может быть больше 100
// $medKit = 50;
// //Упал
// $alex->setHp(-30);
// echo $alex->getHp()."<br>";
// //Нашел аптечку
// $alex->setHp($medKit);
// echo $alex->getHp();
