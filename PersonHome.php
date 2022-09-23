<?php
class Person
{
  private $name;
  private $lastname;
  private $age;
  private $hp;
  private $mother;
  private $father;

  function __construct($name, $lastname, $age, $mother = null, $father = null)
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
  function setHp($hp)
  {
    if ($this->hp + $hp >= 100) $this->hp = 100;
    else $this->hp = $this->hp + $hp;
  }
  function getHp()
  {
    return $this->hp;
  }
  function getName()
  {
    return $this->name;
  }
  function getMother()
  {
    return $this->mother;
  }
  function getFather()
  {
    return $this->father;
  }
  function getLastname()
  {
    return $this->lastname;
  }
  function getAge()
  {
    return $this->age;
  }
  function getInfo()
  {
    if ($this->getFather() != null) {
      $this->getFather()->getInfo();
    }
    if ($this->getMother() != null) {
      $this->getMother()->getInfo();
    }
    // $father = $this->father->getInfo();
    echo "
    <br><br>" . "Меня зовут: " . $this->getName() . "<br>моя фамилия: " . $this->getLastname() . "<br>мой возраст: " . $this->getAge() . " лет";
  }
  function getInfoWithRelations()
  {
    function getPersonTemplate($person)
    {
      return "
      <br>" . "Меня зовут: " . $person->getName() . "<br>моя фамилия: " . $person->getLastname() . "<br>мой возраст: " . $person->getAge() . " лет";
    }
    $me = getPersonTemplate($this);
    $father = getPersonTemplate($this->getFather());
    $mother = getPersonTemplate($this->getMother());
    $grandmaByMother = getPersonTemplate($this->getMother()->getMother());
    $grandmaByFather = getPersonTemplate($this->getFather()->getMother());
    $grandpaByMother = getPersonTemplate($this->getMother()->getFather());
    $grandpaByFather = getPersonTemplate($this->getFather()->getFather());
    return "<h3>Обо мне</h3>" . $me . "<h3>Папа</h3>" . $father .
      "<h3>Мама</h3>" . $mother . "<h3>Бабушка по маме</h3>" . $grandmaByMother .
      "<h3>Дедушка по маме</h3>" . $grandpaByMother . "<h3>Бабушка по папе</h3>" . $grandmaByFather . "<h3>Дедушка по папе</h3>" . $grandpaByFather;
  }
}


$mihail = new Person("Михаил", "Ермаков", 66);
$irina = new Person("Ирина", "Ермакова", 63);
$igor = new Person("Игорь", "Масленкин", 65);
$ira = new Person("Ира", "Масленкина", 62);


$anton = new Person("Антон", "Масленкин", 39, $ira, $igor);
$tatiana = new Person("Татьяна", "Масленкина", 37, $irina, $mihail);
$max = new Person("Макс", "Масленкин", 13, $tatiana, $anton);

echo "<h2>Способ 1:</h2><br>";
echo "<h3>Немного обо мне и моей семье:</h3>";
echo $max->getInfoWithRelations(); //Способ 1

echo "<h2>Способ 2:</h2><br>";
echo "<h3>Немного обо мне и моей семье:</h3>";
echo $max->getInfo(); //Способ 2




// echo $valera->getMother()->getFather()->getName();

// //Здоровье не может быть больше 100
// $medKit = 50;
// //Упал
// $alex->setHp(-30);
// echo $alex->getHp()."<br>";
// //Нашел аптечку
// $alex->setHp($medKit);
// echo $alex->getHp();
