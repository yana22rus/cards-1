let class_card = document.querySelector(".class_card")


let arr1 = ["Strength", "Intelligence", "Willpower", "Agility", "Endurance", "Netural"]

let arr2 = ["Archer", "Assassin", "Battlemage", "Crusader", "Mage", "Monk", "Scout", "Sorcerer", "Spellsword", "Warrior"]


function create_optgroup(arr, label) {

    let optgroup_label = document.createElement("optgroup")
    optgroup_label.setAttribute("label", label)
    class_card.add(optgroup_label);
    for (x of arr) {
        let option = document.createElement("option");
        option.text = x;
        class_card.add(option);

    }

}

create_optgroup(arr1, "Одноцветные")
create_optgroup(arr2, "Мультиатрибут")
