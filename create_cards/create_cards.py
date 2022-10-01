import os

from flask import Blueprint, render_template

create_cards_bp = Blueprint("create_cards", __name__, template_folder="templates")

UPLOAD_FOLDER = os.path.join("img", "cards")


@create_cards_bp.route("/create_cards")
def create_cards():
    type_card = ["Creature", "Action", "Item", "Support"]

    rare_card = ["Legendary", "Epic", "Rare", "Common"]

    attack_card = [x for x in range(0, 16)]

    mana_card = [x for x in range(0, 16)]

    life_card = [x for x in range(0, 13)]

    return render_template("create_cards.html", type_card=type_card, rare_card=rare_card,
                           attack_card=attack_card, mana_card=mana_card, life_card=life_card)
