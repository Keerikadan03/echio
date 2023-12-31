

let CART = new Set();

function toggleHideAddedInfluencers() {

    let checkbox = document.getElementById("checkbox-hide-added");

    if (checkbox.checked) {
        document.querySelectorAll(".influencer-added").forEach(function (element) {
            element.style.display = "none";
        });
    } else {
        document.querySelectorAll(".influencer-added").forEach(function (element) {
            element.style.display = "block";
        });
    }
}

function updateCart() {

    cart_items = document.getElementById("cart-items");

    if (CART.size === 0) {
        cart_items.innerHTML = "<p>No influencers added to cart</p>";
        return
    }

    cart_items.innerHTML = "";
    CART.forEach((influencer_id) => {
        let influencer_card = document.getElementById("influencer-card-" + influencer_id);
        let influencer_name = influencer_card.querySelector(".influencer-name").innerHTML;
        let element_influencer_cart_item = document.createElement("div");
        let element_influencer_cart_item_name = document.createElement("p");
        let element_influencer_cart_item_remove = document.createElement("button");
        element_influencer_cart_item_remove.innerHTML = "x";
        element_influencer_cart_item_remove.classList.add("btn", "btn-sm", "btn-danger");
        element_influencer_cart_item_remove.onclick = () => {removeInfluencer(influencer_id)};
        element_influencer_cart_item_name.innerHTML = influencer_name;
        element_influencer_cart_item.appendChild(element_influencer_cart_item_name);
        element_influencer_cart_item.appendChild(element_influencer_cart_item_remove);
        cart_items.appendChild(element_influencer_cart_item);
    });
}

function addInfluencer(influencer_id) {

    influencer_id = influencer_id.toString();

    let card = document.getElementById("influencer-card-" + influencer_id);
    if (card === null) return;

    let button_cart_add = card.querySelector(".cart-add");
    let button_cart_remove = card.querySelector(".cart-remove");

    button_cart_add.style.display = "none";
    button_cart_remove.style.display = "block";

    if (CART.has(influencer_id)) return;

    let form_input_influencers = document.getElementById("form-input-influencers");
    let form_input_influencers_value = form_input_influencers.value;
    let form_input_influencers_list = form_input_influencers_value.split(",");
    form_input_influencers_list = form_input_influencers_list.filter((value) => value !== "");
    form_input_influencers_list.push(influencer_id);
    form_input_influencers_value = form_input_influencers_list.join(",");
    form_input_influencers.value = form_input_influencers_value;

    console.log(form_input_influencers.value)

    CART.add(influencer_id);

    updateCart();
}

function removeInfluencer(influencer_id) {

    influencer_id = influencer_id.toString();

    let card = document.getElementById("influencer-card-" + influencer_id);
    if (card === null) return;

    let button_cart_add = card.querySelector(".cart-add");
    let button_cart_remove = card.querySelector(".cart-remove");

    button_cart_add.style.display = "block";
    button_cart_remove.style.display = "none";

    if (!CART.has(influencer_id)) return;

    let form_input_influencers = document.getElementById("form-input-influencers");
    let form_input_influencers_list = form_input_influencers.value.split(",");
    form_input_influencers_list = form_input_influencers_list.filter((value) => value !== influencer_id);
    form_input_influencers.value = form_input_influencers_list.join(",");

    console.log(form_input_influencers.value)

    CART.delete(influencer_id);

    updateCart();
}



