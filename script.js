var STORAGE_KEYS = {
    CART: 'samg_cart_v1',
    HISTORY: 'samg_history_v1',
    ORDERNUMBER: 'samg_orderno_v1'
};

var menuItems = [
    // UNLI COMBO SETS
    { id:1, name:"Unli Pork Set", description:"Unlimited Pork Belly, Garlic, and Spicy Pork, plus rice and sides.", price:499, category:"unli-set", image:"./images/item1.jpg", modifications:["No Rice","Extra Lettuce","No Spicy Pork"] },
    { id:2, name:"Unli Beef Set", description:"Unlimited Beef Samgyup, Bulgogi, and Spicy Beef, plus rice and sides.", price:650, category:"unli-set", image:"./images/item2.jpg", modifications:["No Beef Bulgogi","Extra Samgyup","Less Sauce"] },
    { id:3, name:"Unli Pork + Beef Set", description:"Unlimited access to ALL pork and beef meats, plus sides and sauces.", price:750, category:"unli-set", image:"./images/item3.jpg", modifications:["Extra Cheese Dip","Less Pork","Extra Beef"] },
    { id:4, name:"Unli Premium Set", description:"All meats + cheese dip + japchae + kimbap. The ultimate unlimited set.", price:899, category:"unli-set", image:"./images/item4.jpg", modifications:["Extra Kimbap","No Japchae","Extra Cheese Dip"] },
    { id:5, name:"Unli Barkada Set (3-4 pax)", description:"Mixed meats, unlimited sides, and 3 soft drinks for 3-4 people.", price:2200, category:"unli-set", image:"./images/item5.jpg", modifications:["Add 1 Extra Drink","Pork Only","Beef Only"] },

    // FIXED MEAL SETS
    { id:6, name:"Solo Meal A", description:"Pork Belly, Rice, Kimchi, and Fresh Lettuce.", price:250, category:"fixed-set", image:"./images/item6.jpg", modifications:["Extra Rice","No Kimchi"] },
    { id:7, name:"Solo Meal B", description:"Beef Bulgogi, Rice, and Fish Cake.", price:290, category:"fixed-set", image:"./images/item7.jpg", modifications:["Extra Beef Bulgogi","No Fish Cake"] },
    { id:8, name:"Duo Meal Set", description:"Choice of 2 Meats, 2 Rice, and assorted Side Dishes.", price:599, category:"fixed-set", image:"./images/item8.jpg", modifications:["Choose 2 Pork Meats","Choose 2 Beef Meats"] },
    { id:9, name:"Family Meal Set", description:"Choice of 4 Meats, Japchae, 4 Rice, and Kimchi.", price:1099, category:"fixed-set", image:"./images/item9.jpg", modifications:["Extra Japchae","No Kimchi"] },

    // SIDE DISHES
    { id:10, name:"Lettuce (Extra)", description:"Fresh green lettuce for wrapping meat.", price:50, category:"side", image:"./images/item10.jpg", modifications:[] },
    { id:11, name:"Kimchi (Extra)", description:"Fermented napa cabbage with spicy seasoning.", price:60, category:"side", image:"./images/item11.jpg", modifications:[] },
    { id:12, name:"Fish Cake (Eomuk)", description:"Savory Korean fish cake.", price:70, category:"side", image:"./images/item12.jpg", modifications:[] },
    { id:13, name:"Japchae", description:"Stir-fried glass noodles and vegetables.", price:180, category:"side", image:"./images/item13.jpg", modifications:["Less Oil","No Vegetables"] },
    { id:14, name:"Kimbap (Korean Roll)", description:"Rice and vegetables rolled in seasoned seaweed.", price:160, category:"side", image:"./images/item14.jpg", modifications:["No Meat","Extra Tuna"] },
    { id:15, name:"Corn Cheese", description:"Sweet corn kernels baked in melted cheese.", price:120, category:"side", image:"./images/item15.jpg", modifications:["Extra Cheese"] },
    { id:16, name:"Gyoza (3 pcs)", description:"Pan-fried Japanese dumplings with a savory filling.", price:90, category:"side", image:"./images/item16.jpg", modifications:["Steamed Instead of Fried"] },

    // SOUP & NOODLES
    { id:17, name:"Ramyeon (Instant Noodles)", description:"Classic Korean instant noodles in savory broth.", price:90, category:"soup-noodle", image:"./images/item17.jpg", modifications:["Add Egg","Add Cheese"] },
    { id:18, name:"Kimchi Jjigae", description:"Spicy stew made with kimchi, pork, and tofu.", price:220, category:"soup-noodle", image:"./images/item18.jpg", modifications:["Less Spicy","No Pork","Extra Tofu"] },
    { id:19, name:"Doenjang Soup", description:"Savory and nutty Korean soybean paste stew.", price:190, category:"soup-noodle", image:"./images/item19.jpg", modifications:["No Tofu","Add Spicy Kick"] },
    { id:20, name:"Spicy Ramyeon", description:"Extra hot instant noodles for a fiery kick.", price:100, category:"soup-noodle", image:"./images/item20.jpg", modifications:["Add Egg","Less Spicy"] },

    // DRINKS
    { id:21, name:"Iced Tea (Large)", description:"Refreshing brewed iced tea.", price:50, category:"drink", image:"./images/item21.jpg", modifications:["No Ice","Less Sugar"] },
    { id:22, name:"Lemonade", description:"Sweet and tart freshly squeezed lemonade.", price:70, category:"drink", image:"./images/item22.jpg", modifications:["No Ice","Extra Lemon"] },
    { id:23, name:"Soft Drinks (Can)", description:"Assorted canned sodas (Coke, Sprite, Pepsi).", price:60, category:"drink", image:"./images/item23.jpg", modifications:["Coke","Sprite","Royal"] },
    { id:24, name:"Korean Milk Drink", description:"A sweet and creamy milk-based drink (Melon, Strawberry).", price:85, category:"drink", image:"./images/item24.jpg", modifications:["Melon Flavor","Strawberry Flavor"] },
    { id:25, name:"Bottled Water", description:"Small bottle of purified drinking water.", price:35, category:"drink", image:"./images/item25.jpg", modifications:[] },

    // DESSERT
    { id:26, name:"Melona", description:"Classic Korean melon ice cream bar.", price:80, category:"dessert", image:"./images/item26.jpg", modifications:["Strawberry Flavor","Banana Flavor"] },
    { id:27, name:"Ice Cream Cup", description:"Assorted flavors of premium ice cream in a cup.", price:120, category:"dessert", image:"./images/item27.jpg", modifications:["Vanilla","Chocolate","Ube"] },
    { id:28, name:"Bingsu (Small)", description:"Korean shaved ice dessert with sweet toppings.", price:180, category:"dessert", image:"./images/item28.jpg", modifications:["Mango Topping","Strawberry Topping"] },

    // ADD-ONS
    { id:29, name:"Cheese dip", description:"Side of melted cheese dip for your meats", price:180, category:"addons", image:"./images/item29.jpg", modifications:[] },
    { id:30, name:"Mozzarella Cheese", description:"Block of mozzarella for grilling or mixing.", price:220, category:"addons", image:"./images/item30.jpg", modifications:[] },
    { id:31, name:"Garlic Butter", description:"", price:90, category:"addons", image:"./images/item31.jpg", modifications:[] },
    { id:32, name:"Spicy Cheese", description:"Block of mozzarella for grilling or mixing.", price:110, category:"addons", image:"./images/item32.jpg", modifications:[] },
    { id:33, name:"Extra Sauce (Samjang / Gochujang)", description:"Extra Samjang or Gochujang dipping sauce.", price:30, category:"addons", image:"./images/item33.jpg", modifications:["Samjang","Gochujang"] },
];

var cart = loadState(STORAGE_KEYS.CART) || [];
var orderHistory = loadState(STORAGE_KEYS.HISTORY) || [];
var currentOrderNumber = loadState(STORAGE_KEYS.ORDERNUMBER) || 100;
var currentItem = null;
var modalQuantity = 1;
var currentCategory = 'all';

var welcomeScreen = document.getElementById('welcomeScreen');
var startBtn = document.getElementById('startBtn');
var menuGrid = document.getElementById('menuGrid');
var categoryTabs = document.getElementById('categoryTabs');
var cartItemsDiv = document.getElementById('cartItems');
var subtotalSpan = document.getElementById('subtotal');
var totalSpan = document.getElementById('total');
var checkoutBtn = document.getElementById('checkoutBtn');
var cartCountSpan = document.getElementById('cartCount');
var clearCartBtn = document.getElementById('clearCartBtn');

var itemModal = document.getElementById('itemModal');
var modalImage = document.getElementById('modalImage');
var modalTitle = document.getElementById('modalTitle');
var modalDescription = document.getElementById('modalDescription');
var modalModifications = document.getElementById('modalModifications');
var modalQtyDisplay = document.getElementById('modalQty');
var modalQtyMinus = document.getElementById('modalQtyMinus');
var modalQtyPlus = document.getElementById('modalQtyPlus');
var modalPriceDisplay = document.getElementById('modalPrice');
var modalAddBtn = document.getElementById('modalAddBtn');
var modalCancelBtn = document.getElementById('modalCancelBtn');
var specialRequestInput = document.getElementById('specialRequest');

var viewHistoryBtn = document.getElementById('viewHistoryBtn'); 
var orderHistoryModal = document.getElementById('orderHistoryModal');
var orderDetailModal = document.getElementById('orderDetailModal');
var historyList = document.getElementById('historyList');
var closeHistoryBtn = document.getElementById('closeHistoryBtn');
var clearHistoryBtn = document.getElementById('clearHistoryBtn');
var backToHistoryBtn = document.getElementById('backToHistoryBtn');
var closeDetailBtn = document.getElementById('closeDetailBtn');
var detailOrderNumber = document.getElementById('detailOrderNumber');
var detailOrderDate = document.getElementById('detailOrderDate');
var detailItemsList = document.getElementById('detailItemsList');
var detailOrderTotal = document.getElementById('detailOrderTotal');

var totalOrdersCount = document.getElementById('totalOrdersCount');
var totalHistoryAmount = document.getElementById('totalHistoryAmount');

var successModal = document.getElementById('successModal');
var successMessage = document.getElementById('successMessage');
var newOrderBtn = document.getElementById('newOrderBtn');

var checkoutConfirmModal = document.getElementById('checkoutConfirmModal');
var confirmItemsList = document.getElementById('confirmItemsList');
var confirmSubtotal = document.getElementById('confirmSubtotal');
var confirmTotal = document.getElementById('confirmTotal');
var confirmCancelBtn = document.getElementById('confirmCancelBtn');
var confirmProceedBtn = document.getElementById('confirmProceedBtn');

function formatPrice(price){
    price = Number(price) || 0;
    return '₱' + price.toLocaleString('en-US', {minimumFractionDigits:0});
}

function saveState(key, data){
    try { localStorage.setItem(key, JSON.stringify(data)); } catch(e) { console.error('Save error:', e); }
}

function loadState(key){
    try {
        var raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : null;
    } catch(e) { 
        console.error('Load error:', e);
        return null; 
    }
}

function persistAll(){
    saveState(STORAGE_KEYS.CART, cart);
    saveState(STORAGE_KEYS.HISTORY, orderHistory);
    saveState(STORAGE_KEYS.ORDERNUMBER, currentOrderNumber);
}

function escapeHtml(text){
    return String(text).replace(/[&<>"']/g, function(m){
        var map = {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'};
        return map[m];
    });
}

function updateHistorySummary() {
    var totalOrders = orderHistory.length;
    var totalSpent = 0;
    for (var i = 0; i < orderHistory.length; i++) {
        totalSpent += orderHistory[i].total;
    }
    if (totalOrdersCount) totalOrdersCount.textContent = totalOrders;
    if (totalHistoryAmount) totalHistoryAmount.textContent = formatPrice(totalSpent);
}

function renderMenuItems(category){
    if(!category) category = 'all';
    menuGrid.innerHTML = '';
    var items = [];
    if(category === 'all'){
        items = menuItems;
    } else {
        for(var i=0;i<menuItems.length;i++){
            if(menuItems[i].category === category) items.push(menuItems[i]);
        }
    }
    
    for(var i=0;i<items.length;i++){
        var item = items[i];
        var card = document.createElement('article');
        card.className = 'menu-card';
        card.tabIndex = 0;
        card.setAttribute('role','button');
        card.setAttribute('aria-label', item.name + ' ' + formatPrice(item.price));

        var media = document.createElement('div');
        media.className = 'menu-card-media';
        
        var img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        img.loading = 'lazy';
        
        img.onerror = function(){
            this.style.display = 'none';
            var fallback = this.parentNode.querySelector('.image-fallback');
            if (!fallback) {
                fallback = document.createElement('div');
                fallback.className = 'image-fallback';
                fallback.textContent = item.name;
                this.parentNode.appendChild(fallback);
            }
            fallback.style.display = 'flex';
        };
        
        var fallbackDiv = document.createElement('div');
        fallbackDiv.className = 'image-fallback';
        fallbackDiv.textContent = item.name;
        fallbackDiv.style.display = 'none';
        
        media.appendChild(img);
        media.appendChild(fallbackDiv);
        
        var tempImg = new Image();
        tempImg.src = item.image;
        tempImg.onerror = function() {
            img.onerror();
        };

        var body = document.createElement('div');
        body.className = 'menu-card-body';
        body.innerHTML = '<div class="menu-card-title">'+escapeHtml(item.name)+'</div>'
                       + '<div class="menu-card-desc">'+escapeHtml(item.description)+'</div>'
                       + '<div class="menu-card-footer"><div class="menu-price">'+formatPrice(item.price)+'</div>'
                       + '<div class="menu-category">'+item.category.toUpperCase()+'</div></div>';

        card.appendChild(media);
        card.appendChild(body);

        (function(it){
            card.addEventListener('click', function(){ openItemModal(it); });
            card.addEventListener('keydown', function(ev){
                if(ev.key === 'Enter' || ev.key === ' '){ ev.preventDefault(); openItemModal(it); }
            });
        })(item);

        menuGrid.appendChild(card);
    }
}

function renderCart(){
    cartItemsDiv.innerHTML = '';
    if(cart.length === 0){
        cartItemsDiv.innerHTML = '<div class="empty-cart" role="status"><div class="empty-cart-icon">👈</div><p><strong>Start by selecting an item</strong><br>Tap any menu on the left to add to your order.</p></div>';
        updateCartHeader();
        calculateCartTotal();
        return;
    }

    for(var i=0;i<cart.length;i++){
        var it = cart[i];
        var wrapper = document.createElement('div');
        wrapper.className = 'cart-item';

        var header = document.createElement('div');
        header.className = 'cart-item-header';
        
        var itemImg = document.createElement('img');
        itemImg.className = 'cart-item-image';
        itemImg.src = it.image || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="50" height="50"%3E%3Crect fill="%23e0e0e0" width="50" height="50"/%3E%3C/svg%3E';
        itemImg.alt = it.name;
        itemImg.onerror = function(){
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="50" height="50"%3E%3Crect fill="%23e0e0e0" width="50" height="50"/%3E%3C/svg%3E';
        };
        header.appendChild(itemImg);

        var nameDiv = document.createElement('div');
        nameDiv.className = 'cart-item-name';
        nameDiv.textContent = it.name;
        header.appendChild(nameDiv);

        // ADDED: Confirmation before deleting an item
        var removeBtn = document.createElement('button');
        removeBtn.className = 'cart-item-remove';
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', (function(index){
            return function(){
                if(confirm("Are you sure you want to remove this item?")){
                    cart.splice(index,1);
                    persistAll();
                    renderCart();
                }
            };
        })(i));
        header.appendChild(removeBtn);

        var details = document.createElement('div');
        details.className = 'cart-item-details';

        var qtyControls = document.createElement('div');
        qtyControls.className = 'quantity-controls';

        var minus = document.createElement('button');
        minus.className = 'qty-btn';
        minus.textContent = '−';
        minus.addEventListener('click', (function(index){
            return function(){
                if(cart[index].quantity > 1) cart[index].quantity--;
                persistAll();
                renderCart();
            };
        })(i));

        var qtyDisplay = document.createElement('div');
        qtyDisplay.className = 'qty-display';
        qtyDisplay.textContent = it.quantity;

        var plus = document.createElement('button');
        plus.className = 'qty-btn';
        plus.textContent = '+';
        plus.addEventListener('click', (function(index){
            return function(){
                cart[index].quantity++;
                persistAll();
                renderCart();
            };
        })(i));

        qtyControls.appendChild(minus);
        qtyControls.appendChild(qtyDisplay);
        qtyControls.appendChild(plus);

        var priceDiv = document.createElement('div');
        priceDiv.className = 'cart-item-price';
        priceDiv.textContent = formatPrice(it.price * it.quantity);

        details.appendChild(qtyControls);
        details.appendChild(priceDiv);

        wrapper.appendChild(header);
        wrapper.appendChild(details);

        if(it.mods && it.mods.length){
            var modsDiv = document.createElement('div');
            modsDiv.className = 'cart-item-mods';
            modsDiv.textContent = '🔸 Mods: ' + it.mods.join(', ');
            wrapper.appendChild(modsDiv);
        }

        if(it.specialRequest && it.specialRequest.trim()){
            var reqDiv = document.createElement('div');
            reqDiv.className = 'cart-item-mods';
            reqDiv.textContent = '💬 Request: ' + it.specialRequest;
            wrapper.appendChild(reqDiv);
        }

        cartItemsDiv.appendChild(wrapper);
    }

    updateCartHeader();
    calculateCartTotal();
}

function updateCartHeader(){
    var count = 0;
    for(var i=0;i<cart.length;i++) count += cart[i].quantity;
    cartCountSpan.textContent = count + ' item' + (count === 1 ? '' : 's');
}

function calculateCartTotal(){
    var subtotal = 0;
    for(var i=0;i<cart.length;i++){
        subtotal += cart[i].price * cart[i].quantity;
    }
    subtotalSpan.textContent = formatPrice(subtotal);
    totalSpan.textContent = formatPrice(subtotal);
    checkoutBtn.disabled = cart.length === 0;
    checkoutBtn.setAttribute('aria-disabled', cart.length === 0 ? 'true' : 'false');
    persistAll();
}

function openItemModal(item){
    currentItem = item;
    modalQuantity = 1;
    modalImage.src = item.image || '';
    modalImage.onerror = function(){
        this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="20" fill="%23999"%3ENo Image Available%3C/text%3E%3C/svg%3E';
    };
    modalTitle.textContent = item.name;
    modalDescription.textContent = item.description;
    
    if(specialRequestInput) specialRequestInput.value = '';
    
    renderModOptions(item.modifications || []);
    updateModalTotal();
    showModal(itemModal);
    setTimeout(function(){ if(modalQtyMinus) modalQtyMinus.focus(); }, 80);
}

function renderModOptions(mods){
    modalModifications.innerHTML = '';
    var modsTitle = document.getElementById('modsTitle');

    if(mods.length === 0){
        var t = document.createElement('div');
        t.style.color = 'var(--muted)';
        t.style.padding = '10px';
        t.style.fontSize = '13px';
        t.textContent = 'No modifications available';
        modalModifications.appendChild(t);
        if(modsTitle) modsTitle.style.display = 'none';
        return;
    }
    
    if(modsTitle) modsTitle.style.display = 'block';

    for(var i=0;i<mods.length;i++){
        var m = mods[i];
        var label = document.createElement('label');
        label.className = 'modification-option';
        label.tabIndex = 0;

        var input = document.createElement('input');
        input.type = 'checkbox';
        input.value = m;
        input.style.display = 'none';

        var span = document.createElement('span');
        span.textContent = m;

        label.appendChild(input);
        label.appendChild(span);

        (function(lbl, chk){
            lbl.addEventListener('click', function(){
                chk.checked = !chk.checked;
                if(chk.checked) lbl.classList.add('checked'); 
                else lbl.classList.remove('checked');
            });
            lbl.addEventListener('keydown', function(ev){
                if(ev.key === 'Enter' || ev.key === ' '){ 
                    ev.preventDefault(); 
                    lbl.click(); 
                }
            });
        })(label, input);

        modalModifications.appendChild(label);
    }
}

function updateModalTotal(){
    if(!currentItem) return;
    var base = currentItem.price || 0;
    var total = base * modalQuantity;
    modalQtyDisplay.textContent = modalQuantity;
    modalPriceDisplay.textContent = formatPrice(total);
}

function addItemToCart(){
    if(!currentItem) return;
    
    var checks = modalModifications.querySelectorAll('input[type="checkbox"]');
    var selectedMods = [];
    for(var i=0;i<checks.length;i++){
        if(checks[i].checked) selectedMods.push(checks[i].value);
    }
    
    var specialReq = specialRequestInput ? specialRequestInput.value.trim() : '';
    
    var itemData = null;
    for(var j=0; j<menuItems.length; j++){
        if(menuItems[j].id === currentItem.id){
            itemData = menuItems[j];
            break;
        }
    }
    
    var cartItem = {
        id: currentItem.id,
        name: currentItem.name,
        price: currentItem.price,
        quantity: modalQuantity,
        mods: selectedMods,
        specialRequest: specialReq,
        image: itemData ? itemData.image : currentItem.image
    };
    
    cart.push(cartItem);
    persistAll();
    closeModal(itemModal);
    renderCart();
}

function showCheckoutConfirmation(){
    if(cart.length === 0) return;
    confirmItemsList.innerHTML = '';
    
    for(var i=0;i<cart.length;i++){
        var it = cart[i];
        var row = document.createElement('div');
        row.style.display = 'flex';
        row.style.justifyContent = 'space-between';
        row.style.alignItems = 'center';
        row.style.padding = '8px 0';
        row.style.borderBottom = '1px solid #f2f2f4';

        var left = document.createElement('div');
        left.style.fontWeight = '700';
        left.textContent = it.quantity + ' × ' + it.name;

        var right = document.createElement('div');
        right.style.fontWeight = '800';
        right.style.color = 'var(--accent)';
        right.textContent = formatPrice(it.price * it.quantity);

        row.appendChild(left);
        row.appendChild(right);
        confirmItemsList.appendChild(row);

        if(it.mods && it.mods.length){
            var mods = document.createElement('div');
            mods.className = 'confirm-item-mods';
            mods.textContent = '🔸 Mods: ' + it.mods.join(', ');
            confirmItemsList.appendChild(mods);
        }

        if(it.specialRequest && it.specialRequest.trim()){
            var req = document.createElement('div');
            req.className = 'confirm-item-mods';
            req.textContent = '💬 Request: ' + it.specialRequest;
            confirmItemsList.appendChild(req);
        }
    }
    
    var subtotal = 0;
    for(var j=0;j<cart.length;j++) subtotal += cart[j].price * cart[j].quantity;
    confirmSubtotal.textContent = formatPrice(subtotal);
    confirmTotal.textContent = formatPrice(subtotal);
    showModal(checkoutConfirmModal);
}

function handleCheckout(){
    if(cart.length === 0) return;
    currentOrderNumber++;
    var subtotal = 0;
    for(var i=0;i<cart.length;i++) subtotal += cart[i].price * cart[i].quantity;

    var order = {
        id: currentOrderNumber,
        type: 'Kiosk',
        date: (new Date()).toLocaleString(),
        total: subtotal,
        items: []
    };
    
    for(var k=0;k<cart.length;k++) {
        order.items.push(JSON.parse(JSON.stringify(cart[k])));
    }

    orderHistory.unshift(order);
    cart = [];
    persistAll();
    renderCart();
    updateHistorySummary(); 
    showSuccess(order);
}

function showSuccess(order){
    successMessage.innerHTML = 'Your order is being prepared. <strong>Order #A-' + order.id + '</strong><br>Thank you for dining with Samgyeopsal Station! 🎉';
    showModal(successModal);
}

function renderHistory(){
    historyList.innerHTML = '';
    if(orderHistory.length === 0){
        historyList.innerHTML = '<div class="empty-cart"><div class="empty-cart-icon">🚫</div><p>No past orders found.</p></div>';
        updateHistorySummary();
        return;
    }
    
    for(var i=0;i<orderHistory.length;i++){
        var o = orderHistory[i];
        var div = document.createElement('div');
        div.className = 'history-row';
        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';
        div.style.alignItems = 'center';
        div.style.padding = '12px';
        div.style.borderRadius = '12px';
        div.style.marginBottom = '10px';
        div.style.background = '#fafafa';

        var left = document.createElement('div');
        left.innerHTML = '<div style="font-weight:800">Order #A-' + o.id + ' <span style="font-weight:600;color:var(--muted);">(' + o.type + ')</span></div>'
                       + '<div style="color:var(--muted);font-size:13px">' + o.date + '</div>';

        var right = document.createElement('div');
        right.style.display = 'flex';
        right.style.alignItems = 'center';
        right.style.gap = '10px';

        var price = document.createElement('div');
        price.style.fontWeight = '800';
        price.style.color = 'var(--accent)';
        price.textContent = formatPrice(o.total);

        var viewBtn = document.createElement('button');
        viewBtn.className = 'modal-btn modal-btn-view';
        viewBtn.textContent = 'View';
        viewBtn.addEventListener('click', (function(id){
            return function(){ showOrderDetails(id); };
        })(o.id));

        var delBtn = document.createElement('button');
        delBtn.className = 'modal-btn modal-btn-delete';
        delBtn.textContent = 'Delete';
        delBtn.addEventListener('click', (function(id){
            return function(){
                if(!confirm('Delete order A-' + id + ' from history?')) return;
                var newHist = [];
                for(var z=0;z<orderHistory.length;z++){
                    if(orderHistory[z].id !== id) newHist.push(orderHistory[z]);
                }
                orderHistory = newHist;
                persistAll();
                renderHistory();
                updateHistorySummary(); 
            };
        })(o.id));

        right.appendChild(price);
        right.appendChild(viewBtn);
        right.appendChild(delBtn);

        div.appendChild(left);
        div.appendChild(right);
        historyList.appendChild(div);
    }
    
    updateHistorySummary(); 
}

function showOrderDetails(orderId){
    var order = null;
    for(var i=0;i<orderHistory.length;i++){
        if(String(orderHistory[i].id) === String(orderId)) { 
            order = orderHistory[i]; 
            break; 
        }
    }
    if(!order) return;
    
    detailOrderNumber.textContent = 'A-' + order.id;
    detailOrderDate.textContent = order.date;
    detailOrderTotal.textContent = formatPrice(order.total);
    detailItemsList.innerHTML = '';

    for(var i=0;i<order.items.length;i++){
        var it = order.items[i];
        var d = document.createElement('div');
        d.className = 'cart-item';
        d.style.marginBottom = '12px';
        
        var header = document.createElement('div');
        header.style.display = 'flex';
        header.style.alignItems = 'center';
        header.style.justifyContent = 'space-between';
        header.style.marginBottom = '8px';
        
        var leftSide = document.createElement('div');
        leftSide.style.display = 'flex';
        leftSide.style.alignItems = 'center';
        leftSide.style.gap = '10px';
        
        if(it.image){
            var img = document.createElement('img');
            img.className = 'cart-item-image';
            img.src = it.image;
            img.alt = it.name;
            img.onerror = function(){
                this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="50" height="50"%3E%3Crect fill="%23e0e0e0" width="50" height="50"/%3E%3C/svg%3E';
            };
            leftSide.appendChild(img);
        }
        
        var nameQty = document.createElement('div');
        nameQty.style.fontWeight = '800';
        nameQty.textContent = it.quantity + '× ' + escapeHtml(it.name);
        leftSide.appendChild(nameQty);
        
        var priceSpan = document.createElement('div');
        priceSpan.style.fontWeight = '800';
        priceSpan.style.color = 'var(--accent)';
        priceSpan.textContent = formatPrice(it.price * it.quantity);
        
        header.appendChild(leftSide);
        header.appendChild(priceSpan);
        d.appendChild(header);
        
        if(it.mods && it.mods.length){
            var mods = document.createElement('div');
            mods.className = 'cart-item-mods';
            mods.textContent = '🔸 Mods: ' + it.mods.join(', ');
            d.appendChild(mods);
        }
        
        if(it.specialRequest && it.specialRequest.trim()){
            var req = document.createElement('div');
            req.className = 'cart-item-mods';
            req.textContent = '💬 Request: ' + it.specialRequest;
            d.appendChild(req);
        }
        
        detailItemsList.appendChild(d);
    }

    closeModal(orderHistoryModal);
    showModal(orderDetailModal);
}

function showModal(el){
    if(!el) return;
    el.classList.add('active');
    el.setAttribute('aria-hidden','false');
    el.addEventListener('click', backdropClickHandler);
    document.addEventListener('keydown', escKeyHandler);
}

function closeModal(el){
    if(!el) return;
    el.classList.remove('active');
    el.setAttribute('aria-hidden','true');
    el.removeEventListener('click', backdropClickHandler);
    document.removeEventListener('keydown', escKeyHandler);
}

function backdropClickHandler(ev){
    if(ev.target && ev.target.classList && ev.target.classList.contains('modal-backdrop')){
        closeModal(ev.target);
    }
}

function escKeyHandler(ev){
    if(ev.key === 'Escape'){
        var modals = document.querySelectorAll('.modal-backdrop.active');
        for(var i=0;i<modals.length;i++) closeModal(modals[i]);
    }
}

startBtn.addEventListener('click', function(){
    welcomeScreen.classList.add('hidden');
    var firstTab = document.querySelector('.category-tab');
    if(firstTab) firstTab.focus();
});

categoryTabs.addEventListener('click', function(ev){
    var t = ev.target.closest('.category-tab');
    if(!t) return;
    
    var tabs = document.querySelectorAll('.category-tab');
    for(var i=0;i<tabs.length;i++){
        tabs[i].classList.remove('active');
        tabs[i].setAttribute('aria-selected','false');
    }
    t.classList.add('active');
    t.setAttribute('aria-selected','true');

    // --- START OF APPLIED CHANGES ---
    // This makes the clicked tab scroll into view automatically
    t.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
    });
    // --- END OF APPLIED CHANGES ---

    currentCategory = t.getAttribute('data-category') || 'all';
    renderMenuItems(currentCategory);
    
    // ADDED: Reset scroll position to top
    menuGrid.scrollTop = 0;
});

clearCartBtn.addEventListener('click', function(){
    if(cart.length === 0) return;
    if(confirm('Clear all items from the cart?')){
        cart = [];
        persistAll();
        renderCart();
    }
});

modalQtyMinus.addEventListener('click', function(){
    if(modalQuantity > 1){ 
        modalQuantity--; 
        updateModalTotal(); 
    }
});

modalQtyPlus.addEventListener('click', function(){ 
    modalQuantity++; 
    updateModalTotal(); 
});

modalCancelBtn.addEventListener('click', function(){ 
    closeModal(itemModal); 
});

modalAddBtn.addEventListener('click', addItemToCart);

checkoutBtn.addEventListener('click', function(){ 
    showCheckoutConfirmation(); 
});

confirmCancelBtn.addEventListener('click', function(){ 
    closeModal(checkoutConfirmModal); 
});

confirmProceedBtn.addEventListener('click', function(){ 
    closeModal(checkoutConfirmModal); 
    handleCheckout(); 
});

viewHistoryBtn.addEventListener('click', function(){ 
    renderHistory(); 
    showModal(orderHistoryModal); 
});

closeHistoryBtn.addEventListener('click', function(){ 
    closeModal(orderHistoryModal); 
});

if(clearHistoryBtn) {
    clearHistoryBtn.addEventListener('click', function(){
        if(orderHistory.length === 0){ 
            alert('No history to clear.'); 
            return; 
        }
        if(confirm('Clear all order history? This cannot be undone.')){
            orderHistory = []; 
            persistAll(); 
            renderHistory(); 
            updateHistorySummary(); 
        }
    });
}

if(backToHistoryBtn) {
    backToHistoryBtn.addEventListener('click', function(){ 
        closeModal(orderDetailModal); 
        showModal(orderHistoryModal); 
    });
}

if(closeDetailBtn) {
    closeDetailBtn.addEventListener('click', function(){ 
        closeModal(orderDetailModal); 
    });
}

newOrderBtn.addEventListener('click', function(){ 
    closeModal(successModal); 
    calculateCartTotal(); 
});

var modalBackdrops = [itemModal, orderHistoryModal, orderDetailModal, successModal, checkoutConfirmModal];
for(var i=0;i<modalBackdrops.length;i++){
    var m = modalBackdrops[i];
    if(!m) continue;
    m.addEventListener('click', function(e){
        if(e.target === this) closeModal(this);
    });
}

function init(){
    renderMenuItems(currentCategory);
    renderCart();
    calculateCartTotal();
    updateHistorySummary(); 
}

init();
window.addEventListener('beforeunload', persistAll);