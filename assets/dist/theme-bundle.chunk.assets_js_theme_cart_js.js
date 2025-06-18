"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_cart_js"],{

/***/ "./assets/js/theme/cart.js":
/*!*********************************!*\
  !*** ./assets/js/theme/cart.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cart)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/bind */ "./node_modules/lodash/bind.js");
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart/shipping-estimator */ "./assets/js/theme/cart/shipping-estimator.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _common_cart_item_details__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/cart-item-details */ "./assets/js/theme/common/cart-item-details.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }







var Cart = /*#__PURE__*/function (_PageManager) {
  function Cart() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Cart, _PageManager);
  var _proto = Cart.prototype;
  _proto.onReady = function onReady() {
    this.$modal = null;
    this.$cartPageContent = $('[data-cart]');
    this.$cartContent = $('[data-cart-content]');
    this.$cartMessages = $('[data-cart-status]');
    this.$cartTotals = $('[data-cart-totals]');
    this.$cartAdditionalCheckoutBtns = $('[data-cart-additional-checkout-buttons]');
    this.$overlay = $('[data-cart] .loadingOverlay').hide(); // TODO: temporary until roper pulls in his cart components
    this.$activeCartItemId = null;
    this.$activeCartItemBtnAction = null;
    this.setApplePaySupport();
    this.bindEvents();
  };
  _proto.setApplePaySupport = function setApplePaySupport() {
    if (window.ApplePaySession) {
      this.$cartPageContent.addClass('apple-pay-supported');
    }
  };
  _proto.cartUpdate = function cartUpdate($target) {
    var _this = this;
    var itemId = $target.data('cartItemid');
    this.$activeCartItemId = itemId;
    this.$activeCartItemBtnAction = $target.data('action');
    var $el = $("#qty-" + itemId);
    var oldQty = parseInt($el.val(), 10);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = $target.data('action') === 'inc' ? oldQty + 1 : oldQty - 1;
    // Does not quality for min/max quantity
    if (newQty < minQty) {
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(minError);
    } else if (maxQty > 0 && newQty > maxQty) {
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(maxError);
    }
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this.$overlay.hide();
      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;
        _this.refreshContent(remove);
      } else {
        $el.val(oldQty);
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(response.data.errors.join('\n'));
      }
    });
  };
  _proto.cartUpdateQtyTextChange = function cartUpdateQtyTextChange($target, preVal) {
    var _this2 = this;
    if (preVal === void 0) {
      preVal = null;
    }
    var itemId = $target.data('cartItemid');
    var $el = $("#qty-" + itemId);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var oldQty = preVal !== null ? preVal : minQty;
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = parseInt(Number($el.val()), 10);
    var invalidEntry;

    // Does not quality for min/max quantity
    if (!Number.isInteger(newQty)) {
      invalidEntry = $el.val();
      $el.val(oldQty);
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(this.context.invalidEntryMessage.replace('[ENTRY]', invalidEntry));
    } else if (newQty < minQty) {
      $el.val(oldQty);
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(minError);
    } else if (maxQty > 0 && newQty > maxQty) {
      $el.val(oldQty);
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(maxError);
    }
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this2.$overlay.hide();
      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;
        _this2.refreshContent(remove);
      } else {
        $el.val(oldQty);
        return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(response.data.errors.join('\n'));
      }
    });
  };
  _proto.cartRemoveItem = function cartRemoveItem(itemId) {
    var _this3 = this;
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemRemove(itemId, function (err, response) {
      if (response.data.status === 'succeed') {
        _this3.refreshContent(true);
      } else {
        _this3.$overlay.hide();
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(response.data.errors.join('\n'));
      }
    });
  };
  _proto.cartEditOptions = function cartEditOptions(itemId, productId) {
    var _this4 = this;
    var context = Object.assign({
      productForChangeId: productId
    }, this.context);
    var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.defaultModal)();
    if (this.$modal === null) {
      this.$modal = $('#modal');
    }
    var options = {
      template: 'cart/modals/configure-product'
    };
    modal.open();
    this.$modal.find('.modal-content').addClass('hide-content');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.productAttributes.configureInCart(itemId, options, function (err, response) {
      modal.updateContent(response.content);
      var optionChangeHandler = function optionChangeHandler() {
        var $productOptionsContainer = $('[data-product-attributes-wrapper]', _this4.$modal);
        var modalBodyReservedHeight = $productOptionsContainer.outerHeight();
        if ($productOptionsContainer.length && modalBodyReservedHeight) {
          $productOptionsContainer.css('height', modalBodyReservedHeight);
        }
      };
      if (_this4.$modal.hasClass('open')) {
        optionChangeHandler();
      } else {
        _this4.$modal.one(_global_modal__WEBPACK_IMPORTED_MODULE_7__.ModalEvents.opened, optionChangeHandler);
      }
      var modalForm = _this4.$modal.find('form');
      var refreshContent = function refreshContent() {
        return _this4.refreshContent();
      };
      function onSubmit(_x) {
        return _onSubmit.apply(this, arguments);
      }
      function _onSubmit() {
        _onSubmit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(event) {
          return _regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                event.preventDefault();
                _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.postFormData(new FormData(this), function () {
                  modal.close();
                  refreshContent();
                });
              case 1:
                return _context.a(2);
            }
          }, _callee, this);
        }));
        return _onSubmit.apply(this, arguments);
      }
      modalForm.on('submit', onSubmit);
      _this4.productDetails = new _common_cart_item_details__WEBPACK_IMPORTED_MODULE_8__["default"](_this4.$modal, context);
      _this4.bindGiftWrappingForm();
    });
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].hooks.on('product-option-change', function (event, currentTarget) {
      var $form = $(currentTarget).find('form');
      var $submit = $('input.button', $form);
      var $messageBox = $('.alertMessageBox');
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.productAttributes.optionChange(productId, $form.serialize(), function (err, result) {
        var data = result.data || {};
        if (err) {
          (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(err);
          return false;
        }
        if (data.purchasing_message) {
          $('p.alertBox-message', $messageBox).text(data.purchasing_message);
          $submit.prop('disabled', true);
          $messageBox.show();
        } else {
          $submit.prop('disabled', false);
          $messageBox.hide();
        }
        if (!data.purchasable || !data.instock) {
          $submit.prop('disabled', true);
        } else {
          $submit.prop('disabled', false);
        }
      });
    });
  };
  _proto.refreshContent = function refreshContent(remove) {
    var _this5 = this;
    var $cartItemsRows = $('[data-item-row]', this.$cartContent);
    var $cartPageTitle = $('[data-cart-page-title]');
    var options = {
      template: {
        content: 'cart/content',
        totals: 'cart/totals',
        pageTitle: 'cart/page-title',
        statusMessages: 'cart/status-messages',
        additionalCheckoutButtons: 'cart/additional-checkout-buttons'
      }
    };
    this.$overlay.show();

    // Remove last item from cart? Reload
    if (remove && $cartItemsRows.length === 1) {
      return window.location.reload();
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.getContent(options, function (err, response) {
      _this5.$cartContent.html(response.content);
      _this5.$cartTotals.html(response.totals);
      _this5.$cartMessages.html(response.statusMessages);
      _this5.$cartAdditionalCheckoutBtns.html(response.additionalCheckoutButtons);
      $cartPageTitle.replaceWith(response.pageTitle);
      var quantity = $('[data-cart-quantity]', _this5.$cartContent).data('cartQuantity') || 0;
      if (!quantity) {
        return window.location.reload();
      }
      _this5.bindEvents();
      _this5.$overlay.hide();
      $('body').trigger('cart-quantity-update', quantity);
      $("[data-cart-itemid='" + _this5.$activeCartItemId + "']", _this5.$cartContent).filter("[data-action='" + _this5.$activeCartItemBtnAction + "']").trigger('focus');
    });
  };
  _proto.bindCartEvents = function bindCartEvents() {
    var _this6 = this;
    var debounceTimeout = 400;
    var cartUpdate = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdate, debounceTimeout), this);
    var cartUpdateQtyTextChange = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdateQtyTextChange, debounceTimeout), this);
    var cartRemoveItem = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartRemoveItem, debounceTimeout), this);
    var preVal;

    // cart update
    $('[data-cart-update]', this.$cartContent).on('click', function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault();

      // update cart quantity
      cartUpdate($target);
    });

    // cart qty manually updates
    $('.cart-item-qty-input', this.$cartContent).on({
      focus: function onQtyFocus() {
        preVal = this.value;
      },
      change: function change(event) {
        var $target = $(event.currentTarget);
        event.preventDefault();

        // update cart quantity
        cartUpdateQtyTextChange($target, preVal);
      }
    });
    $('.cart-remove', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('cartItemid');
      var string = $(event.currentTarget).data('confirmDelete');
      (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(string, {
        icon: 'warning',
        showCancelButton: true,
        onConfirm: function onConfirm() {
          // remove item from cart
          cartRemoveItem(itemId);
        }
      });
      event.preventDefault();
    });
    $('[data-item-edit]', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemEdit');
      var productId = $(event.currentTarget).data('productId');
      event.preventDefault();
      // edit item in cart
      _this6.cartEditOptions(itemId, productId);
    });
  };
  _proto.bindPromoCodeEvents = function bindPromoCodeEvents() {
    var _this7 = this;
    var $couponContainer = $('.coupon-code');
    var $couponForm = $('.coupon-form');
    var $codeInput = $('[name="couponcode"]', $couponForm);
    $('.coupon-code-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).hide();
      $couponContainer.show();
      $couponContainer.attr('aria-hidden', false);
      $('.coupon-code-cancel').show();
      $codeInput.trigger('focus');
    });
    $('.coupon-code-cancel').on('click', function (event) {
      event.preventDefault();
      $couponContainer.hide();
      $couponContainer.attr('aria-hidden', true);
      $('.coupon-code-cancel').hide();
      $('.coupon-code-add').show();
    });
    $couponForm.on('submit', function (event) {
      var code = $codeInput.val();
      event.preventDefault();

      // Empty code
      if (!code) {
        return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)($codeInput.data('error'));
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.applyCode(code, function (err, response) {
        if (response.data.status === 'success') {
          _this7.refreshContent();
        } else {
          (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(response.data.errors.join('\n'));
        }
      });
    });
  };
  _proto.bindGiftCertificateEvents = function bindGiftCertificateEvents() {
    var _this8 = this;
    var $certContainer = $('.gift-certificate-code');
    var $certForm = $('.cart-gift-certificate-form');
    var $certInput = $('[name="certcode"]', $certForm);
    $('.gift-certificate-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).toggle();
      $certContainer.toggle();
      $certContainer.attr('aria-hidden', false);
      $('.gift-certificate-cancel').toggle();
    });
    $('.gift-certificate-cancel').on('click', function (event) {
      event.preventDefault();
      $certContainer.toggle();
      $certContainer.attr('aria-hidden', true);
      $('.gift-certificate-add').toggle();
      $('.gift-certificate-cancel').toggle();
    });
    $certForm.on('submit', function (event) {
      var code = $certInput.val();
      event.preventDefault();
      if (!(0,_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_3__["default"])(code)) {
        var validationDictionary = (0,_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__.createTranslationDictionary)(_this8.context);
        return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(validationDictionary.invalid_gift_certificate);
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.applyGiftCertificate(code, function (err, resp) {
        if (resp.data.status === 'success') {
          _this8.refreshContent();
        } else {
          (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(resp.data.errors.join('\n'));
        }
      });
    });
  };
  _proto.bindGiftWrappingEvents = function bindGiftWrappingEvents() {
    var _this9 = this;
    var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.defaultModal)();
    $('[data-item-giftwrap]').on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemGiftwrap');
      var options = {
        template: 'cart/modals/gift-wrapping-form'
      };
      event.preventDefault();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.getItemGiftWrappingOptions(itemId, options, function (err, response) {
        modal.updateContent(response.content);
        _this9.bindGiftWrappingForm();
      });
    });
    $('.cart-item-option-remove').on('click', function () {
      window.confirm(_this9.context.giftWrappingRemoveMessage);
    });
  };
  _proto.bindGiftWrappingForm = function bindGiftWrappingForm() {
    $('.giftWrapping-select').on('change', function (event) {
      var $select = $(event.currentTarget);
      var id = $select.val();
      var index = $select.data('index');
      if (!id) {
        return;
      }
      var allowMessage = $select.find("option[value=" + id + "]").data('allowMessage');
      $(".giftWrapping-image-" + index).hide();
      $("#giftWrapping-image-" + index + "-" + id).show();
      if (allowMessage) {
        $("#giftWrapping-message-" + index).show();
      } else {
        $("#giftWrapping-message-" + index).hide();
      }
    });
    $('.giftWrapping-select').trigger('change');
    function toggleViews() {
      var value = $('input:radio[name ="giftwraptype"]:checked').val();
      var $singleForm = $('.giftWrapping-single');
      var $multiForm = $('.giftWrapping-multiple');
      if (value === 'same') {
        $singleForm.show();
        $multiForm.hide();
      } else {
        $singleForm.hide();
        $multiForm.show();
      }
    }
    $('[name="giftwraptype"]').on('click', toggleViews);
    toggleViews();
  };
  _proto.bindEvents = function bindEvents() {
    this.bindCartEvents();
    this.bindPromoCodeEvents();
    this.bindGiftWrappingEvents();
    this.bindGiftCertificateEvents();

    // initiate shipping estimator module
    var shippingErrorMessages = {
      country: this.context.shippingCountryErrorMessage,
      province: this.context.shippingProvinceErrorMessage
    };
    this.shippingEstimator = new _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_6__["default"]($('[data-shipping-estimator]'), shippingErrorMessages);
  };
  return Cart;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./assets/js/theme/cart/shipping-estimator.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/cart/shipping-estimator.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShippingEstimator)
/* harmony export */ });
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");






var ShippingEstimator = /*#__PURE__*/function () {
  function ShippingEstimator($element, shippingErrorMessages) {
    this.$element = $element;
    this.$state = $('[data-field-type="State"]', this.$element);
    this.isEstimatorFormOpened = false;
    this.shippingErrorMessages = shippingErrorMessages;
    this.initFormValidation();
    this.bindStateCountryChange();
    this.bindEstimatorEvents();
  }
  var _proto = ShippingEstimator.prototype;
  _proto.initFormValidation = function initFormValidation() {
    var _this = this;
    var shippingEstimatorAlert = $('.shipping-quotes');
    this.shippingEstimator = 'form[data-shipping-estimator]';
    this.shippingValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: this.shippingEstimator + " .shipping-estimate-submit",
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.announceInputErrorMessage
    });
    $('.shipping-estimate-submit', this.$element).on('click', function (event) {
      // estimator error messages are being injected in html as a result
      // of user submit; clearing and adding role on submit provides
      // regular announcement of these error messages
      if (shippingEstimatorAlert.attr('role')) {
        shippingEstimatorAlert.removeAttr('role');
      }
      shippingEstimatorAlert.attr('role', 'alert');
      // When switching between countries, the state/region is dynamic
      // Only perform a check for all fields when country has a value
      // Otherwise areAll('valid') will check country for validity
      if ($(_this.shippingEstimator + " select[name=\"shipping-country\"]").val()) {
        _this.shippingValidator.performCheck();
      }
      if (_this.shippingValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
    this.bindValidation();
    this.bindStateValidation();
    this.bindUPSRates();
  };
  _proto.bindValidation = function bindValidation() {
    this.shippingValidator.add([{
      selector: this.shippingEstimator + " select[name=\"shipping-country\"]",
      validate: function validate(cb, val) {
        var countryId = Number(val);
        var result = countryId !== 0 && !Number.isNaN(countryId);
        cb(result);
      },
      errorMessage: this.shippingErrorMessages.country
    }]);
  };
  _proto.bindStateValidation = function bindStateValidation() {
    var _this2 = this;
    this.shippingValidator.add([{
      selector: $(this.shippingEstimator + " select[name=\"shipping-state\"]"),
      validate: function validate(cb) {
        var result;
        var $ele = $(_this2.shippingEstimator + " select[name=\"shipping-state\"]");
        if ($ele.length) {
          var eleVal = $ele.val();
          result = eleVal && eleVal.length && eleVal !== 'State/province';
        }
        cb(result);
      },
      errorMessage: this.shippingErrorMessages.province
    }]);
  }

  /**
   * Toggle between default shipping and ups shipping rates
   */;
  _proto.bindUPSRates = function bindUPSRates() {
    var UPSRateToggle = '.estimator-form-toggleUPSRate';
    $('body').on('click', UPSRateToggle, function (event) {
      var $estimatorFormUps = $('.estimator-form--ups');
      var $estimatorFormDefault = $('.estimator-form--default');
      event.preventDefault();
      $estimatorFormUps.toggleClass('u-hiddenVisually');
      $estimatorFormDefault.toggleClass('u-hiddenVisually');
    });
  };
  _proto.bindStateCountryChange = function bindStateCountryChange() {
    var _this3 = this;
    var $last;

    // Requests the states for a country with AJAX
    (0,_common_state_country__WEBPACK_IMPORTED_MODULE_0__["default"])(this.$state, this.context, {
      useIdForStates: true
    }, function (err, field) {
      if (err) {
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_5__.showAlertModal)(err);
        throw new Error(err);
      }
      var $field = $(field);
      if (_this3.shippingValidator.getStatus(_this3.$state) !== 'undefined') {
        _this3.shippingValidator.remove(_this3.$state);
      }
      if ($last) {
        _this3.shippingValidator.remove($last);
      }
      if ($field.is('select')) {
        $last = field;
        _this3.bindStateValidation();
      } else {
        $field.attr('placeholder', 'State/province');
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.Validators.cleanUpStateValidation(field);
      }

      // When you change a country, you swap the state/province between an input and a select dropdown
      // Not all countries require the province to be filled
      // We have to remove this class when we swap since nod validation doesn't cleanup for us
      $(_this3.shippingEstimator).find('.form-field--success').removeClass('form-field--success');
    });
  };
  _proto.toggleEstimatorFormState = function toggleEstimatorFormState(toggleButton, buttonSelector, $toggleContainer) {
    var changeAttributesOnToggle = function changeAttributesOnToggle(selectorToActivate) {
      $(toggleButton).attr('aria-labelledby', selectorToActivate);
      $(buttonSelector).text($("#" + selectorToActivate).text());
    };
    if (!this.isEstimatorFormOpened) {
      changeAttributesOnToggle('estimator-close');
      $toggleContainer.removeClass('u-hidden');
    } else {
      changeAttributesOnToggle('estimator-add');
      $toggleContainer.addClass('u-hidden');
    }
    this.isEstimatorFormOpened = !this.isEstimatorFormOpened;
  };
  _proto.bindEstimatorEvents = function bindEstimatorEvents() {
    var _this4 = this;
    var $estimatorContainer = $('.shipping-estimator');
    var $estimatorForm = $('.estimator-form');
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_4__["default"])();
    $estimatorForm.on('submit', function (event) {
      var params = {
        country_id: $('[name="shipping-country"]', $estimatorForm).val(),
        state_id: $('[name="shipping-state"]', $estimatorForm).val(),
        city: $('[name="shipping-city"]', $estimatorForm).val(),
        zip_code: $('[name="shipping-zip"]', $estimatorForm).val()
      };
      event.preventDefault();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.getShippingQuotes(params, 'cart/shipping-quotes', function (err, response) {
        $('.shipping-quotes').html(response.content);

        // bind the select button
        $('.select-shipping-quote').on('click', function (clickEvent) {
          var quoteId = $('.shipping-quote:checked').val();
          clickEvent.preventDefault();
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.submitShippingQuote(quoteId, function () {
            window.location.reload();
          });
        });
      });
    });
    $('.shipping-estimate-show').on('click', function (event) {
      event.preventDefault();
      _this4.toggleEstimatorFormState(event.currentTarget, '.shipping-estimate-show__btn-name', $estimatorContainer);
    });
  };
  return ShippingEstimator;
}();


/***/ }),

/***/ "./assets/js/theme/common/cart-item-details.js":
/*!*****************************************************!*\
  !*** ./assets/js/theme/common/cart-item-details.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CartItemDetails)
/* harmony export */ });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _product_details_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-details-base */ "./assets/js/theme/common/product-details-base.js");
/* harmony import */ var _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/ie-helpers */ "./assets/js/theme/common/utils/ie-helpers.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var CartItemDetails = /*#__PURE__*/function (_ProductDetailsBase) {
  function CartItemDetails($scope, context, productAttributesData) {
    var _this;
    if (productAttributesData === void 0) {
      productAttributesData = {};
    }
    _this = _ProductDetailsBase.call(this, $scope, context) || this;
    var $form = $('#CartEditProductFieldsForm', _this.$scope);
    var $productOptionsElement = $('[data-product-attributes-wrapper]', $form);
    var hasOptions = $productOptionsElement.html().trim().length;
    var hasDefaultOptions = $productOptionsElement.find('[data-default]').length;
    $productOptionsElement.on('change', function () {
      _this.setProductVariant();
    });
    var optionChangeCallback = _product_details_base__WEBPACK_IMPORTED_MODULE_2__.optionChangeDecorator.call(_this, hasDefaultOptions);

    // Update product attributes. Also update the initial view in case items are oos
    // or have default variant properties that change the view
    if ((lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(productAttributesData) || hasDefaultOptions) && hasOptions) {
      var productId = _this.context.productForChangeId;
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', optionChangeCallback);
    } else {
      _this.updateProductAttributes(productAttributesData);
    }
    return _this;
  }
  _inheritsLoose(CartItemDetails, _ProductDetailsBase);
  var _proto = CartItemDetails.prototype;
  _proto.setProductVariant = function setProductVariant() {
    var unsatisfiedRequiredFields = [];
    var options = [];
    $.each($('[data-product-attribute]'), function (index, value) {
      var optionLabel = value.children[0].innerText;
      var optionTitle = optionLabel.split(':')[0].trim();
      var required = optionLabel.toLowerCase().includes('required');
      var type = value.getAttribute('data-product-attribute');
      if ((type === 'input-file' || type === 'input-text' || type === 'input-number') && value.querySelector('input').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'textarea' && value.querySelector('textarea').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'date') {
        var isSatisfied = Array.from(value.querySelectorAll('select')).every(function (select) {
          return select.selectedIndex !== 0;
        });
        if (isSatisfied) {
          var dateString = Array.from(value.querySelectorAll('select')).map(function (x) {
            return x.value;
          }).join('-');
          options.push(optionTitle + ":" + dateString);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-select') {
        var select = value.querySelector('select');
        var selectedIndex = select.selectedIndex;
        if (selectedIndex !== 0) {
          options.push(optionTitle + ":" + select.options[selectedIndex].innerText);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-rectangle' || type === 'set-radio' || type === 'swatch' || type === 'input-checkbox' || type === 'product-list') {
        var checked = value.querySelector(':checked');
        if (checked) {
          var getSelectedOptionLabel = function getSelectedOptionLabel() {
            var productVariantslist = (0,_utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__.convertIntoArray)(value.children);
            var matchLabelForCheckedInput = function matchLabelForCheckedInput(inpt) {
              return inpt.dataset.productAttributeValue === checked.value;
            };
            return productVariantslist.filter(matchLabelForCheckedInput)[0];
          };
          if (type === 'set-rectangle' || type === 'set-radio' || type === 'product-list') {
            var label = _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__.isBrowserIE ? getSelectedOptionLabel().innerText.trim() : checked.labels[0].innerText;
            if (label) {
              options.push(optionTitle + ":" + label);
            }
          }
          if (type === 'swatch') {
            var _label = _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__.isBrowserIE ? getSelectedOptionLabel().children[0] : checked.labels[0].children[0];
            if (_label) {
              options.push(optionTitle + ":" + _label.title);
            }
          }
          if (type === 'input-checkbox') {
            options.push(optionTitle + ":Yes");
          }
          return;
        }
        if (type === 'input-checkbox') {
          options.push(optionTitle + ":No");
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
    });
    var productVariant = unsatisfiedRequiredFields.length === 0 ? options.sort().join(', ') : 'unsatisfied';
    var view = $('.modal-header-title');
    if (productVariant) {
      productVariant = productVariant === 'unsatisfied' ? '' : productVariant;
      if (view.attr('data-event-type')) {
        view.attr('data-product-variant', productVariant);
      } else {
        var productName = view.html().match(/'(.*?)'/)[1];
        var card = $("[data-name=\"" + productName + "\"]");
        card.attr('data-product-variant', productVariant);
      }
    }
  }

  /**
   * Hide or mark as unavailable out of stock attributes if enabled
   * @param  {Object} data Product attribute data
   */;
  _proto.updateProductAttributes = function updateProductAttributes(data) {
    _ProductDetailsBase.prototype.updateProductAttributes.call(this, data);
    this.$scope.find('.modal-content').removeClass('hide-content');
  };
  return CartItemDetails;
}(_product_details_base__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./assets/js/theme/common/gift-certificate-validator.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/common/gift-certificate-validator.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(cert) {
  if (typeof cert !== 'string' || cert.length === 0) {
    return false;
  }

  // Add any custom gift certificate validation logic here
  return true;
}

/***/ }),

/***/ "./assets/js/theme/common/state-country.js":
/*!*************************************************!*\
  !*** ./assets/js/theme/common/state-country.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/transform */ "./node_modules/lodash/transform.js");
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_transform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");






/**
 * If there are no options from bcapp, a text field will be sent. This will create a select element to hold options after the remote request.
 * @returns {jQuery|HTMLElement}
 */
function makeStateRequired(stateElement, context) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_1___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });
  var replacementAttributes = {
    id: attrs.id,
    'data-label': attrs['data-label'],
    "class": 'form-select',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<select></select>', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  var $hiddenInput = $('[name*="FormFieldIsText"]');
  if ($hiddenInput.length !== 0) {
    $hiddenInput.remove();
  }
  if ($newElement.prev().find('small').length === 0) {
    // String is injected from localizer
    $newElement.prev().append("<small>" + context.required + "</small>");
  } else {
    $newElement.prev().find('small').show();
  }
  return $newElement;
}

/**
 * If a country with states is the default, a select will be sent,
 * In this case we need to be able to switch to an input field and hide the required field
 */
function makeStateOptional(stateElement) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_1___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });
  var replacementAttributes = {
    type: 'text',
    id: attrs.id,
    'data-label': attrs['data-label'],
    "class": 'form-input',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<input />', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  if ($newElement.length !== 0) {
    (0,_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.insertStateHiddenField)($newElement);
    $newElement.prev().find('small').hide();
  }
  return $newElement;
}

/**
 * Adds the array of options from the remote request to the newly created select box.
 * @param {Object} statesArray
 * @param {jQuery} $selectElement
 * @param {Object} options
 */
function addOptions(statesArray, $selectElement, options) {
  var container = [];
  container.push("<option value=\"\">" + statesArray.prefix + "</option>");
  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()($selectElement)) {
    statesArray.states.forEach(function (stateObj) {
      if (options.useIdForStates) {
        container.push("<option value=\"" + stateObj.id + "\">" + stateObj.name + "</option>");
      } else {
        container.push("<option value=\"" + stateObj.name + "\">" + (stateObj.label ? stateObj.label : stateObj.name) + "</option>");
      }
    });
    $selectElement.html(container.join(' '));
  }
}

/**
 *
 * @param {jQuery} stateElement
 * @param {Object} context
 * @param {Object} options
 * @param {Function} callback
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(stateElement, context, options, callback) {
  if (context === void 0) {
    context = {};
  }
  /**
   * Backwards compatible for three parameters instead of four
   *
   * Available options:
   *
   * useIdForStates {Bool} - Generates states dropdown using id for values instead of strings
   */
  if (typeof options === 'function') {
    /* eslint-disable no-param-reassign */
    callback = options;
    options = {};
    /* eslint-enable no-param-reassign */
  }
  $('select[data-field-type="Country"]').on('change', function (event) {
    var countryName = $(event.currentTarget).val();
    if (countryName === '') {
      return;
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.country.getByName(countryName, function (err, response) {
      if (err) {
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_4__.showAlertModal)(context.state_error);
        return callback(err);
      }
      var $currentInput = $('[data-field-type="State"]');
      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(response.data.states)) {
        // The element may have been replaced with a select, reselect it
        var $selectElement = makeStateRequired($currentInput, context);
        addOptions(response.data, $selectElement, options);
        callback(null, $selectElement);
      } else {
        var newElement = makeStateOptional($currentInput, context);
        callback(null, newElement);
      }
    });
  });
}

/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTranslationDictionary: () => (/* binding */ createTranslationDictionary)
/* harmony export */ });
var TRANSLATIONS = 'translations';
var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};
var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);
    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};

/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */
var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
    validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
    validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXJ0X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFDQSx1S0FBQUEsQ0FBQSxFQUFBQyxDQUFBLEVBQUFDLENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLFdBQUEsOEJBQUFDLEVBQUFOLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsUUFBQUMsQ0FBQSxHQUFBTCxDQUFBLElBQUFBLENBQUEsQ0FBQU0sU0FBQSxZQUFBQyxTQUFBLEdBQUFQLENBQUEsR0FBQU8sU0FBQSxFQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsTUFBQSxDQUFBTCxDQUFBLENBQUFDLFNBQUEsVUFBQUssbUJBQUEsQ0FBQUgsQ0FBQSx1QkFBQVYsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsUUFBQUUsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUksQ0FBQSxNQUFBQyxDQUFBLEdBQUFYLENBQUEsUUFBQVksQ0FBQSxPQUFBQyxDQUFBLEtBQUFGLENBQUEsS0FBQWIsQ0FBQSxLQUFBZ0IsQ0FBQSxFQUFBcEIsQ0FBQSxFQUFBcUIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFOLENBQUEsRUFBQU0sQ0FBQSxDQUFBQyxJQUFBLENBQUF2QixDQUFBLE1BQUFzQixDQUFBLFdBQUFBLEVBQUFyQixDQUFBLEVBQUFDLENBQUEsV0FBQU0sQ0FBQSxHQUFBUCxDQUFBLEVBQUFRLENBQUEsTUFBQUcsQ0FBQSxHQUFBWixDQUFBLEVBQUFtQixDQUFBLENBQUFmLENBQUEsR0FBQUYsQ0FBQSxFQUFBbUIsQ0FBQSxnQkFBQUMsRUFBQXBCLENBQUEsRUFBQUUsQ0FBQSxTQUFBSyxDQUFBLEdBQUFQLENBQUEsRUFBQVUsQ0FBQSxHQUFBUixDQUFBLEVBQUFI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QUcsQ0FBQyxVQUFBOEQsR0FBRztJQUFBLE9BQUlBLEdBQUcsQ0FBQzlFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQytFLEdBQUcsQ0FBQyxDQUFDO0VBQUEsRUFBQztFQUVwRyxPQUFPRixlQUFlLENBQUNHLE1BQU0sQ0FBQyxVQUFDQyxHQUFHLEVBQUVILEdBQUcsRUFBRW5ZLENBQUMsRUFBSztJQUMzQ3NZLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDLEdBQUdILGFBQWEsQ0FBQ2hZLENBQUMsQ0FBQztJQUMzQixPQUFPc1ksR0FBRztFQUNkLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNWLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jYXJ0LmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NhcnQvc2hpcHBpbmctZXN0aW1hdG9yLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9jYXJ0LWl0ZW0tZGV0YWlscy5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vZ2lmdC1jZXJ0aWZpY2F0ZS12YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3N0YXRlLWNvdW50cnkuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IHsgYmluZCwgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGNoZWNrSXNHaWZ0Q2VydFZhbGlkIGZyb20gJy4vY29tbW9uL2dpZnQtY2VydGlmaWNhdGUtdmFsaWRhdG9yJztcbmltcG9ydCB7IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSB9IGZyb20gJy4vY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IFNoaXBwaW5nRXN0aW1hdG9yIGZyb20gJy4vY2FydC9zaGlwcGluZy1lc3RpbWF0b3InO1xuaW1wb3J0IHsgZGVmYXVsdE1vZGFsLCBzaG93QWxlcnRNb2RhbCwgTW9kYWxFdmVudHMgfSBmcm9tICcuL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgQ2FydEl0ZW1EZXRhaWxzIGZyb20gJy4vY29tbW9uL2NhcnQtaXRlbS1kZXRhaWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBvblJlYWR5KCkge1xuICAgICAgICB0aGlzLiRtb2RhbCA9IG51bGw7XG4gICAgICAgIHRoaXMuJGNhcnRQYWdlQ29udGVudCA9ICQoJ1tkYXRhLWNhcnRdJyk7XG4gICAgICAgIHRoaXMuJGNhcnRDb250ZW50ID0gJCgnW2RhdGEtY2FydC1jb250ZW50XScpO1xuICAgICAgICB0aGlzLiRjYXJ0TWVzc2FnZXMgPSAkKCdbZGF0YS1jYXJ0LXN0YXR1c10nKTtcbiAgICAgICAgdGhpcy4kY2FydFRvdGFscyA9ICQoJ1tkYXRhLWNhcnQtdG90YWxzXScpO1xuICAgICAgICB0aGlzLiRjYXJ0QWRkaXRpb25hbENoZWNrb3V0QnRucyA9ICQoJ1tkYXRhLWNhcnQtYWRkaXRpb25hbC1jaGVja291dC1idXR0b25zXScpO1xuICAgICAgICB0aGlzLiRvdmVybGF5ID0gJCgnW2RhdGEtY2FydF0gLmxvYWRpbmdPdmVybGF5JylcbiAgICAgICAgICAgIC5oaWRlKCk7IC8vIFRPRE86IHRlbXBvcmFyeSB1bnRpbCByb3BlciBwdWxscyBpbiBoaXMgY2FydCBjb21wb25lbnRzXG4gICAgICAgIHRoaXMuJGFjdGl2ZUNhcnRJdGVtSWQgPSBudWxsO1xuICAgICAgICB0aGlzLiRhY3RpdmVDYXJ0SXRlbUJ0bkFjdGlvbiA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5zZXRBcHBsZVBheVN1cHBvcnQoKTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgc2V0QXBwbGVQYXlTdXBwb3J0KCkge1xuICAgICAgICBpZiAod2luZG93LkFwcGxlUGF5U2Vzc2lvbikge1xuICAgICAgICAgICAgdGhpcy4kY2FydFBhZ2VDb250ZW50LmFkZENsYXNzKCdhcHBsZS1wYXktc3VwcG9ydGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYXJ0VXBkYXRlKCR0YXJnZXQpIHtcbiAgICAgICAgY29uc3QgaXRlbUlkID0gJHRhcmdldC5kYXRhKCdjYXJ0SXRlbWlkJyk7XG4gICAgICAgIHRoaXMuJGFjdGl2ZUNhcnRJdGVtSWQgPSBpdGVtSWQ7XG4gICAgICAgIHRoaXMuJGFjdGl2ZUNhcnRJdGVtQnRuQWN0aW9uID0gJHRhcmdldC5kYXRhKCdhY3Rpb24nKTtcblxuICAgICAgICBjb25zdCAkZWwgPSAkKGAjcXR5LSR7aXRlbUlkfWApO1xuICAgICAgICBjb25zdCBvbGRRdHkgPSBwYXJzZUludCgkZWwudmFsKCksIDEwKTtcbiAgICAgICAgY29uc3QgbWF4UXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWF4JyksIDEwKTtcbiAgICAgICAgY29uc3QgbWluUXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWluJyksIDEwKTtcbiAgICAgICAgY29uc3QgbWluRXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNaW5FcnJvcicpO1xuICAgICAgICBjb25zdCBtYXhFcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1heEVycm9yJyk7XG4gICAgICAgIGNvbnN0IG5ld1F0eSA9ICR0YXJnZXQuZGF0YSgnYWN0aW9uJykgPT09ICdpbmMnID8gb2xkUXR5ICsgMSA6IG9sZFF0eSAtIDE7XG4gICAgICAgIC8vIERvZXMgbm90IHF1YWxpdHkgZm9yIG1pbi9tYXggcXVhbnRpdHlcbiAgICAgICAgaWYgKG5ld1F0eSA8IG1pblF0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKG1pbkVycm9yKTtcbiAgICAgICAgfSBlbHNlIGlmIChtYXhRdHkgPiAwICYmIG5ld1F0eSA+IG1heFF0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKG1heEVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1VcGRhdGUoaXRlbUlkLCBuZXdRdHksIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VlZCcpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcXVhbnRpdHkgaXMgY2hhbmdlZCBcIjFcIiBmcm9tIFwiMFwiLCB3ZSBoYXZlIHRvIHJlbW92ZSB0aGUgcm93LlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZSA9IChuZXdRdHkgPT09IDApO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudChyZW1vdmUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XG4gICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwocmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSgkdGFyZ2V0LCBwcmVWYWwgPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1JZCA9ICR0YXJnZXQuZGF0YSgnY2FydEl0ZW1pZCcpO1xuICAgICAgICBjb25zdCAkZWwgPSAkKGAjcXR5LSR7aXRlbUlkfWApO1xuICAgICAgICBjb25zdCBtYXhRdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNYXgnKSwgMTApO1xuICAgICAgICBjb25zdCBtaW5RdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNaW4nKSwgMTApO1xuICAgICAgICBjb25zdCBvbGRRdHkgPSBwcmVWYWwgIT09IG51bGwgPyBwcmVWYWwgOiBtaW5RdHk7XG4gICAgICAgIGNvbnN0IG1pbkVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5TWluRXJyb3InKTtcbiAgICAgICAgY29uc3QgbWF4RXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNYXhFcnJvcicpO1xuICAgICAgICBjb25zdCBuZXdRdHkgPSBwYXJzZUludChOdW1iZXIoJGVsLnZhbCgpKSwgMTApO1xuICAgICAgICBsZXQgaW52YWxpZEVudHJ5O1xuXG4gICAgICAgIC8vIERvZXMgbm90IHF1YWxpdHkgZm9yIG1pbi9tYXggcXVhbnRpdHlcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKG5ld1F0eSkpIHtcbiAgICAgICAgICAgIGludmFsaWRFbnRyeSA9ICRlbC52YWwoKTtcbiAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgIHJldHVybiBzaG93QWxlcnRNb2RhbCh0aGlzLmNvbnRleHQuaW52YWxpZEVudHJ5TWVzc2FnZS5yZXBsYWNlKCdbRU5UUlldJywgaW52YWxpZEVudHJ5KSk7XG4gICAgICAgIH0gZWxzZSBpZiAobmV3UXR5IDwgbWluUXR5KSB7XG4gICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XG4gICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwobWluRXJyb3IpO1xuICAgICAgICB9IGVsc2UgaWYgKG1heFF0eSA+IDAgJiYgbmV3UXR5ID4gbWF4UXR5KSB7XG4gICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XG4gICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwobWF4RXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1VcGRhdGUoaXRlbUlkLCBuZXdRdHksIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VlZCcpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcXVhbnRpdHkgaXMgY2hhbmdlZCBcIjFcIiBmcm9tIFwiMFwiLCB3ZSBoYXZlIHRvIHJlbW92ZSB0aGUgcm93LlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZSA9IChuZXdRdHkgPT09IDApO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudChyZW1vdmUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwocmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYXJ0UmVtb3ZlSXRlbShpdGVtSWQpIHtcbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1SZW1vdmUoaXRlbUlkLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VlZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcbiAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbChyZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhcnRFZGl0T3B0aW9ucyhpdGVtSWQsIHByb2R1Y3RJZCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0geyBwcm9kdWN0Rm9yQ2hhbmdlSWQ6IHByb2R1Y3RJZCwgLi4udGhpcy5jb250ZXh0IH07XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZGVmYXVsdE1vZGFsKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuJG1vZGFsID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiRtb2RhbCA9ICQoJyNtb2RhbCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9tb2RhbHMvY29uZmlndXJlLXByb2R1Y3QnLFxuICAgICAgICB9O1xuXG4gICAgICAgIG1vZGFsLm9wZW4oKTtcbiAgICAgICAgdGhpcy4kbW9kYWwuZmluZCgnLm1vZGFsLWNvbnRlbnQnKS5hZGRDbGFzcygnaGlkZS1jb250ZW50Jyk7XG5cbiAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLmNvbmZpZ3VyZUluQ2FydChpdGVtSWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlLmNvbnRlbnQpO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uQ2hhbmdlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNDb250YWluZXIgPSAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZXMtd3JhcHBlcl0nLCB0aGlzLiRtb2RhbCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kYWxCb2R5UmVzZXJ2ZWRIZWlnaHQgPSAkcHJvZHVjdE9wdGlvbnNDb250YWluZXIub3V0ZXJIZWlnaHQoKTtcblxuICAgICAgICAgICAgICAgIGlmICgkcHJvZHVjdE9wdGlvbnNDb250YWluZXIubGVuZ3RoICYmIG1vZGFsQm9keVJlc2VydmVkSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICRwcm9kdWN0T3B0aW9uc0NvbnRhaW5lci5jc3MoJ2hlaWdodCcsIG1vZGFsQm9keVJlc2VydmVkSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodGhpcy4kbW9kYWwuaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbkNoYW5nZUhhbmRsZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbW9kYWwub25lKE1vZGFsRXZlbnRzLm9wZW5lZCwgb3B0aW9uQ2hhbmdlSGFuZGxlcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG1vZGFsRm9ybSA9IHRoaXMuJG1vZGFsLmZpbmQoJ2Zvcm0nKTtcbiAgICAgICAgICAgIGNvbnN0IHJlZnJlc2hDb250ZW50ID0gKCkgPT4gdGhpcy5yZWZyZXNoQ29udGVudCgpO1xuICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LnBvc3RGb3JtRGF0YShuZXcgRm9ybURhdGEodGhpcyksICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVmcmVzaENvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW9kYWxGb3JtLm9uKCdzdWJtaXQnLCBvblN1Ym1pdCk7XG5cbiAgICAgICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMgPSBuZXcgQ2FydEl0ZW1EZXRhaWxzKHRoaXMuJG1vZGFsLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgdGhpcy5iaW5kR2lmdFdyYXBwaW5nRm9ybSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB1dGlscy5ob29rcy5vbigncHJvZHVjdC1vcHRpb24tY2hhbmdlJywgKGV2ZW50LCBjdXJyZW50VGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZm9ybSA9ICQoY3VycmVudFRhcmdldCkuZmluZCgnZm9ybScpO1xuICAgICAgICAgICAgY29uc3QgJHN1Ym1pdCA9ICQoJ2lucHV0LmJ1dHRvbicsICRmb3JtKTtcbiAgICAgICAgICAgIGNvbnN0ICRtZXNzYWdlQm94ID0gJCgnLmFsZXJ0TWVzc2FnZUJveCcpO1xuXG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKHByb2R1Y3RJZCwgJGZvcm0uc2VyaWFsaXplKCksIChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHQuZGF0YSB8fCB7fTtcblxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnB1cmNoYXNpbmdfbWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICAkKCdwLmFsZXJ0Qm94LW1lc3NhZ2UnLCAkbWVzc2FnZUJveCkudGV4dChkYXRhLnB1cmNoYXNpbmdfbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgJG1lc3NhZ2VCb3guc2hvdygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICRtZXNzYWdlQm94LmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVmcmVzaENvbnRlbnQocmVtb3ZlKSB7XG4gICAgICAgIGNvbnN0ICRjYXJ0SXRlbXNSb3dzID0gJCgnW2RhdGEtaXRlbS1yb3ddJywgdGhpcy4kY2FydENvbnRlbnQpO1xuICAgICAgICBjb25zdCAkY2FydFBhZ2VUaXRsZSA9ICQoJ1tkYXRhLWNhcnQtcGFnZS10aXRsZV0nKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJ2NhcnQvY29udGVudCcsXG4gICAgICAgICAgICAgICAgdG90YWxzOiAnY2FydC90b3RhbHMnLFxuICAgICAgICAgICAgICAgIHBhZ2VUaXRsZTogJ2NhcnQvcGFnZS10aXRsZScsXG4gICAgICAgICAgICAgICAgc3RhdHVzTWVzc2FnZXM6ICdjYXJ0L3N0YXR1cy1tZXNzYWdlcycsXG4gICAgICAgICAgICAgICAgYWRkaXRpb25hbENoZWNrb3V0QnV0dG9uczogJ2NhcnQvYWRkaXRpb25hbC1jaGVja291dC1idXR0b25zJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGxhc3QgaXRlbSBmcm9tIGNhcnQ/IFJlbG9hZFxuICAgICAgICBpZiAocmVtb3ZlICYmICRjYXJ0SXRlbXNSb3dzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQob3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGNhcnRDb250ZW50Lmh0bWwocmVzcG9uc2UuY29udGVudCk7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0VG90YWxzLmh0bWwocmVzcG9uc2UudG90YWxzKTtcbiAgICAgICAgICAgIHRoaXMuJGNhcnRNZXNzYWdlcy5odG1sKHJlc3BvbnNlLnN0YXR1c01lc3NhZ2VzKTtcbiAgICAgICAgICAgIHRoaXMuJGNhcnRBZGRpdGlvbmFsQ2hlY2tvdXRCdG5zLmh0bWwocmVzcG9uc2UuYWRkaXRpb25hbENoZWNrb3V0QnV0dG9ucyk7XG5cbiAgICAgICAgICAgICRjYXJ0UGFnZVRpdGxlLnJlcGxhY2VXaXRoKHJlc3BvbnNlLnBhZ2VUaXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gJCgnW2RhdGEtY2FydC1xdWFudGl0eV0nLCB0aGlzLiRjYXJ0Q29udGVudCkuZGF0YSgnY2FydFF1YW50aXR5JykgfHwgMDtcblxuICAgICAgICAgICAgaWYgKCFxdWFudGl0eSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VyKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIHF1YW50aXR5KTtcblxuICAgICAgICAgICAgJChgW2RhdGEtY2FydC1pdGVtaWQ9JyR7dGhpcy4kYWN0aXZlQ2FydEl0ZW1JZH0nXWAsIHRoaXMuJGNhcnRDb250ZW50KVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoYFtkYXRhLWFjdGlvbj0nJHt0aGlzLiRhY3RpdmVDYXJ0SXRlbUJ0bkFjdGlvbn0nXWApXG4gICAgICAgICAgICAgICAgLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRDYXJ0RXZlbnRzKCkge1xuICAgICAgICBjb25zdCBkZWJvdW5jZVRpbWVvdXQgPSA0MDA7XG4gICAgICAgIGNvbnN0IGNhcnRVcGRhdGUgPSBiaW5kKGRlYm91bmNlKHRoaXMuY2FydFVwZGF0ZSwgZGVib3VuY2VUaW1lb3V0KSwgdGhpcyk7XG4gICAgICAgIGNvbnN0IGNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlID0gYmluZChkZWJvdW5jZSh0aGlzLmNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlLCBkZWJvdW5jZVRpbWVvdXQpLCB0aGlzKTtcbiAgICAgICAgY29uc3QgY2FydFJlbW92ZUl0ZW0gPSBiaW5kKGRlYm91bmNlKHRoaXMuY2FydFJlbW92ZUl0ZW0sIGRlYm91bmNlVGltZW91dCksIHRoaXMpO1xuICAgICAgICBsZXQgcHJlVmFsO1xuXG4gICAgICAgIC8vIGNhcnQgdXBkYXRlXG4gICAgICAgICQoJ1tkYXRhLWNhcnQtdXBkYXRlXScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIGNhcnQgcXVhbnRpdHlcbiAgICAgICAgICAgIGNhcnRVcGRhdGUoJHRhcmdldCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNhcnQgcXR5IG1hbnVhbGx5IHVwZGF0ZXNcbiAgICAgICAgJCgnLmNhcnQtaXRlbS1xdHktaW5wdXQnLCB0aGlzLiRjYXJ0Q29udGVudCkub24oe1xuICAgICAgICAgICAgZm9jdXM6IGZ1bmN0aW9uIG9uUXR5Rm9jdXMoKSB7XG4gICAgICAgICAgICAgICAgcHJlVmFsID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGFuZ2U6IGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIGNhcnQgcXVhbnRpdHlcbiAgICAgICAgICAgICAgICBjYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSgkdGFyZ2V0LCBwcmVWYWwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmNhcnQtcmVtb3ZlJywgdGhpcy4kY2FydENvbnRlbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnY2FydEl0ZW1pZCcpO1xuICAgICAgICAgICAgY29uc3Qgc3RyaW5nID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdjb25maXJtRGVsZXRlJyk7XG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbChzdHJpbmcsIHtcbiAgICAgICAgICAgICAgICBpY29uOiAnd2FybmluZycsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvbkNvbmZpcm06ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGl0ZW0gZnJvbSBjYXJ0XG4gICAgICAgICAgICAgICAgICAgIGNhcnRSZW1vdmVJdGVtKGl0ZW1JZCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtaXRlbS1lZGl0XScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2l0ZW1FZGl0Jyk7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ3Byb2R1Y3RJZCcpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIGVkaXQgaXRlbSBpbiBjYXJ0XG4gICAgICAgICAgICB0aGlzLmNhcnRFZGl0T3B0aW9ucyhpdGVtSWQsIHByb2R1Y3RJZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRQcm9tb0NvZGVFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0ICRjb3Vwb25Db250YWluZXIgPSAkKCcuY291cG9uLWNvZGUnKTtcbiAgICAgICAgY29uc3QgJGNvdXBvbkZvcm0gPSAkKCcuY291cG9uLWZvcm0nKTtcbiAgICAgICAgY29uc3QgJGNvZGVJbnB1dCA9ICQoJ1tuYW1lPVwiY291cG9uY29kZVwiXScsICRjb3Vwb25Gb3JtKTtcblxuICAgICAgICAkKCcuY291cG9uLWNvZGUtYWRkJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5oaWRlKCk7XG4gICAgICAgICAgICAkY291cG9uQ29udGFpbmVyLnNob3coKTtcbiAgICAgICAgICAgICRjb3Vwb25Db250YWluZXIuYXR0cignYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcuY291cG9uLWNvZGUtY2FuY2VsJykuc2hvdygpO1xuICAgICAgICAgICAgJGNvZGVJbnB1dC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuY291cG9uLWNvZGUtY2FuY2VsJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJGNvdXBvbkNvbnRhaW5lci5oaWRlKCk7XG4gICAgICAgICAgICAkY291cG9uQ29udGFpbmVyLmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgICAgICAkKCcuY291cG9uLWNvZGUtY2FuY2VsJykuaGlkZSgpO1xuICAgICAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWFkZCcpLnNob3coKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGNvdXBvbkZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSAkY29kZUlucHV0LnZhbCgpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyBFbXB0eSBjb2RlXG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwoJGNvZGVJbnB1dC5kYXRhKCdlcnJvcicpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuYXBwbHlDb2RlKGNvZGUsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEdpZnRDZXJ0aWZpY2F0ZUV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgJGNlcnRDb250YWluZXIgPSAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jb2RlJyk7XG4gICAgICAgIGNvbnN0ICRjZXJ0Rm9ybSA9ICQoJy5jYXJ0LWdpZnQtY2VydGlmaWNhdGUtZm9ybScpO1xuICAgICAgICBjb25zdCAkY2VydElucHV0ID0gJCgnW25hbWU9XCJjZXJ0Y29kZVwiXScsICRjZXJ0Rm9ybSk7XG5cbiAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtYWRkJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkudG9nZ2xlKCk7XG4gICAgICAgICAgICAkY2VydENvbnRhaW5lci50b2dnbGUoKTtcbiAgICAgICAgICAgICRjZXJ0Q29udGFpbmVyLmF0dHIoJ2FyaWEtaGlkZGVuJywgZmFsc2UpO1xuICAgICAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtY2FuY2VsJykudG9nZ2xlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWNhbmNlbCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkY2VydENvbnRhaW5lci50b2dnbGUoKTtcbiAgICAgICAgICAgICRjZXJ0Q29udGFpbmVyLmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1hZGQnKS50b2dnbGUoKTtcbiAgICAgICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWNhbmNlbCcpLnRvZ2dsZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkY2VydEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSAkY2VydElucHV0LnZhbCgpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAoIWNoZWNrSXNHaWZ0Q2VydFZhbGlkKGNvZGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdGlvbkRpY3Rpb25hcnkgPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkodGhpcy5jb250ZXh0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwodmFsaWRhdGlvbkRpY3Rpb25hcnkuaW52YWxpZF9naWZ0X2NlcnRpZmljYXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuYXBwbHlHaWZ0Q2VydGlmaWNhdGUoY29kZSwgKGVyciwgcmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwLmRhdGEuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKHJlc3AuZGF0YS5lcnJvcnMuam9pbignXFxuJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kR2lmdFdyYXBwaW5nRXZlbnRzKCkge1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRlZmF1bHRNb2RhbCgpO1xuXG4gICAgICAgICQoJ1tkYXRhLWl0ZW0tZ2lmdHdyYXBdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdpdGVtR2lmdHdyYXAnKTtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdjYXJ0L21vZGFscy9naWZ0LXdyYXBwaW5nLWZvcm0nLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgbW9kYWwub3BlbigpO1xuXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRJdGVtR2lmdFdyYXBwaW5nT3B0aW9ucyhpdGVtSWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZS5jb250ZW50KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYmluZEdpZnRXcmFwcGluZ0Zvcm0oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuY2FydC1pdGVtLW9wdGlvbi1yZW1vdmUnKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cuY29uZmlybSh0aGlzLmNvbnRleHQuZ2lmdFdyYXBwaW5nUmVtb3ZlTWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRHaWZ0V3JhcHBpbmdGb3JtKCkge1xuICAgICAgICAkKCcuZ2lmdFdyYXBwaW5nLXNlbGVjdCcpLm9uKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkc2VsZWN0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gJHNlbGVjdC52YWwoKTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gJHNlbGVjdC5kYXRhKCdpbmRleCcpO1xuXG4gICAgICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBhbGxvd01lc3NhZ2UgPSAkc2VsZWN0LmZpbmQoYG9wdGlvblt2YWx1ZT0ke2lkfV1gKS5kYXRhKCdhbGxvd01lc3NhZ2UnKTtcblxuICAgICAgICAgICAgJChgLmdpZnRXcmFwcGluZy1pbWFnZS0ke2luZGV4fWApLmhpZGUoKTtcbiAgICAgICAgICAgICQoYCNnaWZ0V3JhcHBpbmctaW1hZ2UtJHtpbmRleH0tJHtpZH1gKS5zaG93KCk7XG5cbiAgICAgICAgICAgIGlmIChhbGxvd01lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAkKGAjZ2lmdFdyYXBwaW5nLW1lc3NhZ2UtJHtpbmRleH1gKS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoYCNnaWZ0V3JhcHBpbmctbWVzc2FnZS0ke2luZGV4fWApLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmdpZnRXcmFwcGluZy1zZWxlY3QnKS50cmlnZ2VyKCdjaGFuZ2UnKTtcblxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVWaWV3cygpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gJCgnaW5wdXQ6cmFkaW9bbmFtZSA9XCJnaWZ0d3JhcHR5cGVcIl06Y2hlY2tlZCcpLnZhbCgpO1xuICAgICAgICAgICAgY29uc3QgJHNpbmdsZUZvcm0gPSAkKCcuZ2lmdFdyYXBwaW5nLXNpbmdsZScpO1xuICAgICAgICAgICAgY29uc3QgJG11bHRpRm9ybSA9ICQoJy5naWZ0V3JhcHBpbmctbXVsdGlwbGUnKTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnc2FtZScpIHtcbiAgICAgICAgICAgICAgICAkc2luZ2xlRm9ybS5zaG93KCk7XG4gICAgICAgICAgICAgICAgJG11bHRpRm9ybS5oaWRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRzaW5nbGVGb3JtLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAkbXVsdGlGb3JtLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICQoJ1tuYW1lPVwiZ2lmdHdyYXB0eXBlXCJdJykub24oJ2NsaWNrJywgdG9nZ2xlVmlld3MpO1xuXG4gICAgICAgIHRvZ2dsZVZpZXdzKCk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5iaW5kQ2FydEV2ZW50cygpO1xuICAgICAgICB0aGlzLmJpbmRQcm9tb0NvZGVFdmVudHMoKTtcbiAgICAgICAgdGhpcy5iaW5kR2lmdFdyYXBwaW5nRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuYmluZEdpZnRDZXJ0aWZpY2F0ZUV2ZW50cygpO1xuXG4gICAgICAgIC8vIGluaXRpYXRlIHNoaXBwaW5nIGVzdGltYXRvciBtb2R1bGVcbiAgICAgICAgY29uc3Qgc2hpcHBpbmdFcnJvck1lc3NhZ2VzID0ge1xuICAgICAgICAgICAgY291bnRyeTogdGhpcy5jb250ZXh0LnNoaXBwaW5nQ291bnRyeUVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgIHByb3ZpbmNlOiB0aGlzLmNvbnRleHQuc2hpcHBpbmdQcm92aW5jZUVycm9yTWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zaGlwcGluZ0VzdGltYXRvciA9IG5ldyBTaGlwcGluZ0VzdGltYXRvcigkKCdbZGF0YS1zaGlwcGluZy1lc3RpbWF0b3JdJyksIHNoaXBwaW5nRXJyb3JNZXNzYWdlcyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHN0YXRlQ291bnRyeSBmcm9tICcuLi9jb21tb24vc3RhdGUtY291bnRyeSc7XG5pbXBvcnQgbm9kIGZyb20gJy4uL2NvbW1vbi9ub2QnO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCB7IFZhbGlkYXRvcnMsIGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4uL2NvbW1vbi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXBwaW5nRXN0aW1hdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudCwgc2hpcHBpbmdFcnJvck1lc3NhZ2VzKSB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcblxuICAgICAgICB0aGlzLiRzdGF0ZSA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScsIHRoaXMuJGVsZW1lbnQpO1xuICAgICAgICB0aGlzLmlzRXN0aW1hdG9yRm9ybU9wZW5lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNoaXBwaW5nRXJyb3JNZXNzYWdlcyA9IHNoaXBwaW5nRXJyb3JNZXNzYWdlcztcbiAgICAgICAgdGhpcy5pbml0Rm9ybVZhbGlkYXRpb24oKTtcbiAgICAgICAgdGhpcy5iaW5kU3RhdGVDb3VudHJ5Q2hhbmdlKCk7XG4gICAgICAgIHRoaXMuYmluZEVzdGltYXRvckV2ZW50cygpO1xuICAgIH1cblxuICAgIGluaXRGb3JtVmFsaWRhdGlvbigpIHtcbiAgICAgICAgY29uc3Qgc2hpcHBpbmdFc3RpbWF0b3JBbGVydCA9ICQoJy5zaGlwcGluZy1xdW90ZXMnKTtcblxuICAgICAgICB0aGlzLnNoaXBwaW5nRXN0aW1hdG9yID0gJ2Zvcm1bZGF0YS1zaGlwcGluZy1lc3RpbWF0b3JdJztcbiAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6IGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IC5zaGlwcGluZy1lc3RpbWF0ZS1zdWJtaXRgLFxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtc3VibWl0JywgdGhpcy4kZWxlbWVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgLy8gZXN0aW1hdG9yIGVycm9yIG1lc3NhZ2VzIGFyZSBiZWluZyBpbmplY3RlZCBpbiBodG1sIGFzIGEgcmVzdWx0XG4gICAgICAgICAgICAvLyBvZiB1c2VyIHN1Ym1pdDsgY2xlYXJpbmcgYW5kIGFkZGluZyByb2xlIG9uIHN1Ym1pdCBwcm92aWRlc1xuICAgICAgICAgICAgLy8gcmVndWxhciBhbm5vdW5jZW1lbnQgb2YgdGhlc2UgZXJyb3IgbWVzc2FnZXNcbiAgICAgICAgICAgIGlmIChzaGlwcGluZ0VzdGltYXRvckFsZXJ0LmF0dHIoJ3JvbGUnKSkge1xuICAgICAgICAgICAgICAgIHNoaXBwaW5nRXN0aW1hdG9yQWxlcnQucmVtb3ZlQXR0cigncm9sZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaGlwcGluZ0VzdGltYXRvckFsZXJ0LmF0dHIoJ3JvbGUnLCAnYWxlcnQnKTtcbiAgICAgICAgICAgIC8vIFdoZW4gc3dpdGNoaW5nIGJldHdlZW4gY291bnRyaWVzLCB0aGUgc3RhdGUvcmVnaW9uIGlzIGR5bmFtaWNcbiAgICAgICAgICAgIC8vIE9ubHkgcGVyZm9ybSBhIGNoZWNrIGZvciBhbGwgZmllbGRzIHdoZW4gY291bnRyeSBoYXMgYSB2YWx1ZVxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIGFyZUFsbCgndmFsaWQnKSB3aWxsIGNoZWNrIGNvdW50cnkgZm9yIHZhbGlkaXR5XG4gICAgICAgICAgICBpZiAoJChgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLWNvdW50cnlcIl1gKS52YWwoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5iaW5kVmFsaWRhdGlvbigpO1xuICAgICAgICB0aGlzLmJpbmRTdGF0ZVZhbGlkYXRpb24oKTtcbiAgICAgICAgdGhpcy5iaW5kVVBTUmF0ZXMoKTtcbiAgICB9XG5cbiAgICBiaW5kVmFsaWRhdGlvbigpIHtcbiAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLWNvdW50cnlcIl1gLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3VudHJ5SWQgPSBOdW1iZXIodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY291bnRyeUlkICE9PSAwICYmICFOdW1iZXIuaXNOYU4oY291bnRyeUlkKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLnNoaXBwaW5nRXJyb3JNZXNzYWdlcy5jb3VudHJ5LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgYmluZFN0YXRlVmFsaWRhdGlvbigpIHtcbiAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctc3RhdGVcIl1gKSxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGVsZSA9ICQoYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1zdGF0ZVwiXWApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkZWxlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlVmFsID0gJGVsZS52YWwoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZWxlVmFsICYmIGVsZVZhbC5sZW5ndGggJiYgZWxlVmFsICE9PSAnU3RhdGUvcHJvdmluY2UnO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5zaGlwcGluZ0Vycm9yTWVzc2FnZXMucHJvdmluY2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgYmV0d2VlbiBkZWZhdWx0IHNoaXBwaW5nIGFuZCB1cHMgc2hpcHBpbmcgcmF0ZXNcbiAgICAgKi9cbiAgICBiaW5kVVBTUmF0ZXMoKSB7XG4gICAgICAgIGNvbnN0IFVQU1JhdGVUb2dnbGUgPSAnLmVzdGltYXRvci1mb3JtLXRvZ2dsZVVQU1JhdGUnO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBVUFNSYXRlVG9nZ2xlLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtVXBzID0gJCgnLmVzdGltYXRvci1mb3JtLS11cHMnKTtcbiAgICAgICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtRGVmYXVsdCA9ICQoJy5lc3RpbWF0b3ItZm9ybS0tZGVmYXVsdCcpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkZXN0aW1hdG9yRm9ybVVwcy50b2dnbGVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgJGVzdGltYXRvckZvcm1EZWZhdWx0LnRvZ2dsZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRTdGF0ZUNvdW50cnlDaGFuZ2UoKSB7XG4gICAgICAgIGxldCAkbGFzdDtcblxuICAgICAgICAvLyBSZXF1ZXN0cyB0aGUgc3RhdGVzIGZvciBhIGNvdW50cnkgd2l0aCBBSkFYXG4gICAgICAgIHN0YXRlQ291bnRyeSh0aGlzLiRzdGF0ZSwgdGhpcy5jb250ZXh0LCB7IHVzZUlkRm9yU3RhdGVzOiB0cnVlIH0sIChlcnIsIGZpZWxkKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoZXJyKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgJGZpZWxkID0gJChmaWVsZCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLmdldFN0YXR1cyh0aGlzLiRzdGF0ZSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5yZW1vdmUodGhpcy4kc3RhdGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJGxhc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLnJlbW92ZSgkbGFzdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkZmllbGQuaXMoJ3NlbGVjdCcpKSB7XG4gICAgICAgICAgICAgICAgJGxhc3QgPSBmaWVsZDtcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRTdGF0ZVZhbGlkYXRpb24oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGZpZWxkLmF0dHIoJ3BsYWNlaG9sZGVyJywgJ1N0YXRlL3Byb3ZpbmNlJyk7XG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5jbGVhblVwU3RhdGVWYWxpZGF0aW9uKGZpZWxkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gV2hlbiB5b3UgY2hhbmdlIGEgY291bnRyeSwgeW91IHN3YXAgdGhlIHN0YXRlL3Byb3ZpbmNlIGJldHdlZW4gYW4gaW5wdXQgYW5kIGEgc2VsZWN0IGRyb3Bkb3duXG4gICAgICAgICAgICAvLyBOb3QgYWxsIGNvdW50cmllcyByZXF1aXJlIHRoZSBwcm92aW5jZSB0byBiZSBmaWxsZWRcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgdG8gcmVtb3ZlIHRoaXMgY2xhc3Mgd2hlbiB3ZSBzd2FwIHNpbmNlIG5vZCB2YWxpZGF0aW9uIGRvZXNuJ3QgY2xlYW51cCBmb3IgdXNcbiAgICAgICAgICAgICQodGhpcy5zaGlwcGluZ0VzdGltYXRvcikuZmluZCgnLmZvcm0tZmllbGQtLXN1Y2Nlc3MnKS5yZW1vdmVDbGFzcygnZm9ybS1maWVsZC0tc3VjY2VzcycpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0b2dnbGVFc3RpbWF0b3JGb3JtU3RhdGUodG9nZ2xlQnV0dG9uLCBidXR0b25TZWxlY3RvciwgJHRvZ2dsZUNvbnRhaW5lcikge1xuICAgICAgICBjb25zdCBjaGFuZ2VBdHRyaWJ1dGVzT25Ub2dnbGUgPSAoc2VsZWN0b3JUb0FjdGl2YXRlKSA9PiB7XG4gICAgICAgICAgICAkKHRvZ2dsZUJ1dHRvbikuYXR0cignYXJpYS1sYWJlbGxlZGJ5Jywgc2VsZWN0b3JUb0FjdGl2YXRlKTtcbiAgICAgICAgICAgICQoYnV0dG9uU2VsZWN0b3IpLnRleHQoJChgIyR7c2VsZWN0b3JUb0FjdGl2YXRlfWApLnRleHQoKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzRXN0aW1hdG9yRm9ybU9wZW5lZCkge1xuICAgICAgICAgICAgY2hhbmdlQXR0cmlidXRlc09uVG9nZ2xlKCdlc3RpbWF0b3ItY2xvc2UnKTtcbiAgICAgICAgICAgICR0b2dnbGVDb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGFuZ2VBdHRyaWJ1dGVzT25Ub2dnbGUoJ2VzdGltYXRvci1hZGQnKTtcbiAgICAgICAgICAgICR0b2dnbGVDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0VzdGltYXRvckZvcm1PcGVuZWQgPSAhdGhpcy5pc0VzdGltYXRvckZvcm1PcGVuZWQ7XG4gICAgfVxuXG4gICAgYmluZEVzdGltYXRvckV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgJGVzdGltYXRvckNvbnRhaW5lciA9ICQoJy5zaGlwcGluZy1lc3RpbWF0b3InKTtcbiAgICAgICAgY29uc3QgJGVzdGltYXRvckZvcm0gPSAkKCcuZXN0aW1hdG9yLWZvcm0nKTtcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG4gICAgICAgICRlc3RpbWF0b3JGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgY291bnRyeV9pZDogJCgnW25hbWU9XCJzaGlwcGluZy1jb3VudHJ5XCJdJywgJGVzdGltYXRvckZvcm0pLnZhbCgpLFxuICAgICAgICAgICAgICAgIHN0YXRlX2lkOiAkKCdbbmFtZT1cInNoaXBwaW5nLXN0YXRlXCJdJywgJGVzdGltYXRvckZvcm0pLnZhbCgpLFxuICAgICAgICAgICAgICAgIGNpdHk6ICQoJ1tuYW1lPVwic2hpcHBpbmctY2l0eVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgICAgICB6aXBfY29kZTogJCgnW25hbWU9XCJzaGlwcGluZy16aXBcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRTaGlwcGluZ1F1b3RlcyhwYXJhbXMsICdjYXJ0L3NoaXBwaW5nLXF1b3RlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnLnNoaXBwaW5nLXF1b3RlcycpLmh0bWwocmVzcG9uc2UuY29udGVudCk7XG5cbiAgICAgICAgICAgICAgICAvLyBiaW5kIHRoZSBzZWxlY3QgYnV0dG9uXG4gICAgICAgICAgICAgICAgJCgnLnNlbGVjdC1zaGlwcGluZy1xdW90ZScpLm9uKCdjbGljaycsIGNsaWNrRXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBxdW90ZUlkID0gJCgnLnNoaXBwaW5nLXF1b3RlOmNoZWNrZWQnKS52YWwoKTtcblxuICAgICAgICAgICAgICAgICAgICBjbGlja0V2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuc3VibWl0U2hpcHBpbmdRdW90ZShxdW90ZUlkLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1zaG93Jykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlRXN0aW1hdG9yRm9ybVN0YXRlKGV2ZW50LmN1cnJlbnRUYXJnZXQsICcuc2hpcHBpbmctZXN0aW1hdGUtc2hvd19fYnRuLW5hbWUnLCAkZXN0aW1hdG9yQ29udGFpbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBQcm9kdWN0RGV0YWlsc0Jhc2UsIHsgb3B0aW9uQ2hhbmdlRGVjb3JhdG9yIH0gZnJvbSAnLi9wcm9kdWN0LWRldGFpbHMtYmFzZSc7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGlzQnJvd3NlcklFLCBjb252ZXJ0SW50b0FycmF5IH0gZnJvbSAnLi91dGlscy9pZS1oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydEl0ZW1EZXRhaWxzIGV4dGVuZHMgUHJvZHVjdERldGFpbHNCYXNlIHtcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsIGNvbnRleHQsIHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKCRzY29wZSwgY29udGV4dCk7XG5cbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKCcjQ2FydEVkaXRQcm9kdWN0RmllbGRzRm9ybScsIHRoaXMuJHNjb3BlKTtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWxlbWVudCA9ICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlcy13cmFwcGVyXScsICRmb3JtKTtcbiAgICAgICAgY29uc3QgaGFzT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQuaHRtbCgpLnRyaW0oKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGhhc0RlZmF1bHRPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWxlbWVudC5maW5kKCdbZGF0YS1kZWZhdWx0XScpLmxlbmd0aDtcblxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFByb2R1Y3RWYXJpYW50KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbkNoYW5nZUNhbGxiYWNrID0gb3B0aW9uQ2hhbmdlRGVjb3JhdG9yLmNhbGwodGhpcywgaGFzRGVmYXVsdE9wdGlvbnMpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBwcm9kdWN0IGF0dHJpYnV0ZXMuIEFsc28gdXBkYXRlIHRoZSBpbml0aWFsIHZpZXcgaW4gY2FzZSBpdGVtcyBhcmUgb29zXG4gICAgICAgIC8vIG9yIGhhdmUgZGVmYXVsdCB2YXJpYW50IHByb3BlcnRpZXMgdGhhdCBjaGFuZ2UgdGhlIHZpZXdcbiAgICAgICAgaWYgKChpc0VtcHR5KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSkgfHwgaGFzRGVmYXVsdE9wdGlvbnMpICYmIGhhc09wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9IHRoaXMuY29udGV4dC5wcm9kdWN0Rm9yQ2hhbmdlSWQ7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UocHJvZHVjdElkLCAkZm9ybS5zZXJpYWxpemUoKSwgJ3Byb2R1Y3RzL2J1bGstZGlzY291bnQtcmF0ZXMnLCBvcHRpb25DaGFuZ2VDYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRQcm9kdWN0VmFyaWFudCgpIHtcbiAgICAgICAgY29uc3QgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcyA9IFtdO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gW107XG5cbiAgICAgICAgJC5lYWNoKCQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpLCAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25MYWJlbCA9IHZhbHVlLmNoaWxkcmVuWzBdLmlubmVyVGV4dDtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvblRpdGxlID0gb3B0aW9uTGFiZWwuc3BsaXQoJzonKVswXS50cmltKCk7XG4gICAgICAgICAgICBjb25zdCByZXF1aXJlZCA9IG9wdGlvbkxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdmFsdWUuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtYXR0cmlidXRlJyk7XG5cbiAgICAgICAgICAgIGlmICgodHlwZSA9PT0gJ2lucHV0LWZpbGUnIHx8IHR5cGUgPT09ICdpbnB1dC10ZXh0JyB8fCB0eXBlID09PSAnaW5wdXQtbnVtYmVyJykgJiYgdmFsdWUucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSA9PT0gJycgJiYgcmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3RleHRhcmVhJyAmJiB2YWx1ZS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLnZhbHVlID09PSAnJyAmJiByZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnZGF0ZScpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1NhdGlzZmllZCA9IEFycmF5LmZyb20odmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpLmV2ZXJ5KChzZWxlY3QpID0+IHNlbGVjdC5zZWxlY3RlZEluZGV4ICE9PSAwKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc1NhdGlzZmllZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gQXJyYXkuZnJvbSh2YWx1ZS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKSkubWFwKCh4KSA9PiB4LnZhbHVlKS5qb2luKCctJyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtkYXRlU3RyaW5nfWApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3QgPSB2YWx1ZS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gc2VsZWN0LnNlbGVjdGVkSW5kZXg7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7c2VsZWN0Lm9wdGlvbnNbc2VsZWN0ZWRJbmRleF0uaW5uZXJUZXh0fWApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXJlY3RhbmdsZScgfHwgdHlwZSA9PT0gJ3NldC1yYWRpbycgfHwgdHlwZSA9PT0gJ3N3YXRjaCcgfHwgdHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94JyB8fCB0eXBlID09PSAncHJvZHVjdC1saXN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSB2YWx1ZS5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdldFNlbGVjdGVkT3B0aW9uTGFiZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0VmFyaWFudHNsaXN0ID0gY29udmVydEludG9BcnJheSh2YWx1ZS5jaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaExhYmVsRm9yQ2hlY2tlZElucHV0ID0gaW5wdCA9PiBpbnB0LmRhdGFzZXQucHJvZHVjdEF0dHJpYnV0ZVZhbHVlID09PSBjaGVja2VkLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3RWYXJpYW50c2xpc3QuZmlsdGVyKG1hdGNoTGFiZWxGb3JDaGVja2VkSW5wdXQpWzBdO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1yZWN0YW5nbGUnIHx8IHR5cGUgPT09ICdzZXQtcmFkaW8nIHx8IHR5cGUgPT09ICdwcm9kdWN0LWxpc3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGlzQnJvd3NlcklFID8gZ2V0U2VsZWN0ZWRPcHRpb25MYWJlbCgpLmlubmVyVGV4dC50cmltKCkgOiBjaGVja2VkLmxhYmVsc1swXS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWx9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N3YXRjaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gaXNCcm93c2VySUUgPyBnZXRTZWxlY3RlZE9wdGlvbkxhYmVsKCkuY2hpbGRyZW5bMF0gOiBjaGVja2VkLmxhYmVsc1swXS5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtsYWJlbC50aXRsZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9Olllc2ApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06Tm9gKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBwcm9kdWN0VmFyaWFudCA9IHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMubGVuZ3RoID09PSAwID8gb3B0aW9ucy5zb3J0KCkuam9pbignLCAnKSA6ICd1bnNhdGlzZmllZCc7XG4gICAgICAgIGNvbnN0IHZpZXcgPSAkKCcubW9kYWwtaGVhZGVyLXRpdGxlJyk7XG5cbiAgICAgICAgaWYgKHByb2R1Y3RWYXJpYW50KSB7XG4gICAgICAgICAgICBwcm9kdWN0VmFyaWFudCA9IHByb2R1Y3RWYXJpYW50ID09PSAndW5zYXRpc2ZpZWQnID8gJycgOiBwcm9kdWN0VmFyaWFudDtcbiAgICAgICAgICAgIGlmICh2aWV3LmF0dHIoJ2RhdGEtZXZlbnQtdHlwZScpKSB7XG4gICAgICAgICAgICAgICAgdmlldy5hdHRyKCdkYXRhLXByb2R1Y3QtdmFyaWFudCcsIHByb2R1Y3RWYXJpYW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdE5hbWUgPSB2aWV3Lmh0bWwoKS5tYXRjaCgvJyguKj8pJy8pWzFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmQgPSAkKGBbZGF0YS1uYW1lPVwiJHtwcm9kdWN0TmFtZX1cIl1gKTtcbiAgICAgICAgICAgICAgICBjYXJkLmF0dHIoJ2RhdGEtcHJvZHVjdC12YXJpYW50JywgcHJvZHVjdFZhcmlhbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSBvciBtYXJrIGFzIHVuYXZhaWxhYmxlIG91dCBvZiBzdG9jayBhdHRyaWJ1dGVzIGlmIGVuYWJsZWRcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxuICAgICAqL1xuICAgIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGRhdGEpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoZGF0YSk7XG5cbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnLm1vZGFsLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnaGlkZS1jb250ZW50Jyk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNlcnQpIHtcbiAgICBpZiAodHlwZW9mIGNlcnQgIT09ICdzdHJpbmcnIHx8IGNlcnQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgYW55IGN1c3RvbSBnaWZ0IGNlcnRpZmljYXRlIHZhbGlkYXRpb24gbG9naWMgaGVyZVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIH0gZnJvbSAnLi91dGlscy9mb3JtLXV0aWxzJztcbmltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcblxuLyoqXG4gKiBJZiB0aGVyZSBhcmUgbm8gb3B0aW9ucyBmcm9tIGJjYXBwLCBhIHRleHQgZmllbGQgd2lsbCBiZSBzZW50LiBUaGlzIHdpbGwgY3JlYXRlIGEgc2VsZWN0IGVsZW1lbnQgdG8gaG9sZCBvcHRpb25zIGFmdGVyIHRoZSByZW1vdGUgcmVxdWVzdC5cbiAqIEByZXR1cm5zIHtqUXVlcnl8SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIG1ha2VTdGF0ZVJlcXVpcmVkKHN0YXRlRWxlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJzID0gXy50cmFuc2Zvcm0oc3RhdGVFbGVtZW50LnByb3AoJ2F0dHJpYnV0ZXMnKSwgKHJlc3VsdCwgaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCByZXQgPSByZXN1bHQ7XG4gICAgICAgIHJldFtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlcGxhY2VtZW50QXR0cmlidXRlcyA9IHtcbiAgICAgICAgaWQ6IGF0dHJzLmlkLFxuICAgICAgICAnZGF0YS1sYWJlbCc6IGF0dHJzWydkYXRhLWxhYmVsJ10sXG4gICAgICAgIGNsYXNzOiAnZm9ybS1zZWxlY3QnLFxuICAgICAgICBuYW1lOiBhdHRycy5uYW1lLFxuICAgICAgICAnZGF0YS1maWVsZC10eXBlJzogYXR0cnNbJ2RhdGEtZmllbGQtdHlwZSddLFxuICAgIH07XG5cbiAgICBzdGF0ZUVsZW1lbnQucmVwbGFjZVdpdGgoJCgnPHNlbGVjdD48L3NlbGVjdD4nLCByZXBsYWNlbWVudEF0dHJpYnV0ZXMpKTtcblxuICAgIGNvbnN0ICRuZXdFbGVtZW50ID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XG4gICAgY29uc3QgJGhpZGRlbklucHV0ID0gJCgnW25hbWUqPVwiRm9ybUZpZWxkSXNUZXh0XCJdJyk7XG5cbiAgICBpZiAoJGhpZGRlbklucHV0Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAkaGlkZGVuSW5wdXQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgaWYgKCRuZXdFbGVtZW50LnByZXYoKS5maW5kKCdzbWFsbCcpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBTdHJpbmcgaXMgaW5qZWN0ZWQgZnJvbSBsb2NhbGl6ZXJcbiAgICAgICAgJG5ld0VsZW1lbnQucHJldigpLmFwcGVuZChgPHNtYWxsPiR7Y29udGV4dC5yZXF1aXJlZH08L3NtYWxsPmApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRuZXdFbGVtZW50LnByZXYoKS5maW5kKCdzbWFsbCcpLnNob3coKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJG5ld0VsZW1lbnQ7XG59XG5cbi8qKlxuICogSWYgYSBjb3VudHJ5IHdpdGggc3RhdGVzIGlzIHRoZSBkZWZhdWx0LCBhIHNlbGVjdCB3aWxsIGJlIHNlbnQsXG4gKiBJbiB0aGlzIGNhc2Ugd2UgbmVlZCB0byBiZSBhYmxlIHRvIHN3aXRjaCB0byBhbiBpbnB1dCBmaWVsZCBhbmQgaGlkZSB0aGUgcmVxdWlyZWQgZmllbGRcbiAqL1xuZnVuY3Rpb24gbWFrZVN0YXRlT3B0aW9uYWwoc3RhdGVFbGVtZW50KSB7XG4gICAgY29uc3QgYXR0cnMgPSBfLnRyYW5zZm9ybShzdGF0ZUVsZW1lbnQucHJvcCgnYXR0cmlidXRlcycpLCAocmVzdWx0LCBpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHJldCA9IHJlc3VsdDtcbiAgICAgICAgcmV0W2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlO1xuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXBsYWNlbWVudEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgaWQ6IGF0dHJzLmlkLFxuICAgICAgICAnZGF0YS1sYWJlbCc6IGF0dHJzWydkYXRhLWxhYmVsJ10sXG4gICAgICAgIGNsYXNzOiAnZm9ybS1pbnB1dCcsXG4gICAgICAgIG5hbWU6IGF0dHJzLm5hbWUsXG4gICAgICAgICdkYXRhLWZpZWxkLXR5cGUnOiBhdHRyc1snZGF0YS1maWVsZC10eXBlJ10sXG4gICAgfTtcblxuICAgIHN0YXRlRWxlbWVudC5yZXBsYWNlV2l0aCgkKCc8aW5wdXQgLz4nLCByZXBsYWNlbWVudEF0dHJpYnV0ZXMpKTtcblxuICAgIGNvbnN0ICRuZXdFbGVtZW50ID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XG5cbiAgICBpZiAoJG5ld0VsZW1lbnQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGluc2VydFN0YXRlSGlkZGVuRmllbGQoJG5ld0VsZW1lbnQpO1xuICAgICAgICAkbmV3RWxlbWVudC5wcmV2KCkuZmluZCgnc21hbGwnKS5oaWRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICRuZXdFbGVtZW50O1xufVxuXG4vKipcbiAqIEFkZHMgdGhlIGFycmF5IG9mIG9wdGlvbnMgZnJvbSB0aGUgcmVtb3RlIHJlcXVlc3QgdG8gdGhlIG5ld2x5IGNyZWF0ZWQgc2VsZWN0IGJveC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZXNBcnJheVxuICogQHBhcmFtIHtqUXVlcnl9ICRzZWxlY3RFbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5mdW5jdGlvbiBhZGRPcHRpb25zKHN0YXRlc0FycmF5LCAkc2VsZWN0RWxlbWVudCwgb3B0aW9ucykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IFtdO1xuXG4gICAgY29udGFpbmVyLnB1c2goYDxvcHRpb24gdmFsdWU9XCJcIj4ke3N0YXRlc0FycmF5LnByZWZpeH08L29wdGlvbj5gKTtcblxuICAgIGlmICghXy5pc0VtcHR5KCRzZWxlY3RFbGVtZW50KSkge1xuICAgICAgICBzdGF0ZXNBcnJheS5zdGF0ZXMuZm9yRWFjaCgoc3RhdGVPYmopID0+IHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnVzZUlkRm9yU3RhdGVzKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnB1c2goYDxvcHRpb24gdmFsdWU9XCIke3N0YXRlT2JqLmlkfVwiPiR7c3RhdGVPYmoubmFtZX08L29wdGlvbj5gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnB1c2goYDxvcHRpb24gdmFsdWU9XCIke3N0YXRlT2JqLm5hbWV9XCI+JHtzdGF0ZU9iai5sYWJlbCA/IHN0YXRlT2JqLmxhYmVsIDogc3RhdGVPYmoubmFtZX08L29wdGlvbj5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHNlbGVjdEVsZW1lbnQuaHRtbChjb250YWluZXIuam9pbignICcpKTtcbiAgICB9XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7alF1ZXJ5fSBzdGF0ZUVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlRWxlbWVudCwgY29udGV4dCA9IHt9LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIC8qKlxuICAgICAqIEJhY2t3YXJkcyBjb21wYXRpYmxlIGZvciB0aHJlZSBwYXJhbWV0ZXJzIGluc3RlYWQgb2YgZm91clxuICAgICAqXG4gICAgICogQXZhaWxhYmxlIG9wdGlvbnM6XG4gICAgICpcbiAgICAgKiB1c2VJZEZvclN0YXRlcyB7Qm9vbH0gLSBHZW5lcmF0ZXMgc3RhdGVzIGRyb3Bkb3duIHVzaW5nIGlkIGZvciB2YWx1ZXMgaW5zdGVhZCBvZiBzdHJpbmdzXG4gICAgICovXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgfVxuXG4gICAgJCgnc2VsZWN0W2RhdGEtZmllbGQtdHlwZT1cIkNvdW50cnlcIl0nKS5vbignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBjb3VudHJ5TmFtZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkudmFsKCk7XG5cbiAgICAgICAgaWYgKGNvdW50cnlOYW1lID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdXRpbHMuYXBpLmNvdW50cnkuZ2V0QnlOYW1lKGNvdW50cnlOYW1lLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKGNvbnRleHQuc3RhdGVfZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCAkY3VycmVudElucHV0ID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XG5cbiAgICAgICAgICAgIGlmICghXy5pc0VtcHR5KHJlc3BvbnNlLmRhdGEuc3RhdGVzKSkge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBlbGVtZW50IG1heSBoYXZlIGJlZW4gcmVwbGFjZWQgd2l0aCBhIHNlbGVjdCwgcmVzZWxlY3QgaXRcbiAgICAgICAgICAgICAgICBjb25zdCAkc2VsZWN0RWxlbWVudCA9IG1ha2VTdGF0ZVJlcXVpcmVkKCRjdXJyZW50SW5wdXQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgYWRkT3B0aW9ucyhyZXNwb25zZS5kYXRhLCAkc2VsZWN0RWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgJHNlbGVjdEVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gbWFrZVN0YXRlT3B0aW9uYWwoJGN1cnJlbnRJbnB1dCwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBuZXdFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJjb25zdCBUUkFOU0xBVElPTlMgPSAndHJhbnNsYXRpb25zJztcbmNvbnN0IGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkgPSAoZGljdGlvbmFyeSkgPT4gISFPYmplY3Qua2V5cyhkaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLmxlbmd0aDtcbmNvbnN0IGNob29zZUFjdGl2ZURpY3Rpb25hcnkgPSAoLi4uZGljdGlvbmFyeUpzb25MaXN0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWN0aW9uYXJ5SnNvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGljdGlvbmFyeSA9IEpTT04ucGFyc2UoZGljdGlvbmFyeUpzb25MaXN0W2ldKTtcbiAgICAgICAgaWYgKGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkoZGljdGlvbmFyeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkaWN0aW9uYXJ5O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBkZWZpbmVzIFRyYW5zbGF0aW9uIERpY3Rpb25hcnkgdG8gdXNlXG4gKiBAcGFyYW0gY29udGV4dCBwcm92aWRlcyBhY2Nlc3MgdG8gMyB2YWxpZGF0aW9uIEpTT05zIGZyb20gZW4uanNvbjpcbiAqIHZhbGlkYXRpb25fbWVzc2FnZXMsIHZhbGlkYXRpb25fZmFsbGJhY2tfbWVzc2FnZXMgYW5kIGRlZmF1bHRfbWVzc2FnZXNcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgPSAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiB9ID0gY29udGV4dDtcbiAgICBjb25zdCBhY3RpdmVEaWN0aW9uYXJ5ID0gY2hvb3NlQWN0aXZlRGljdGlvbmFyeSh2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OKTtcbiAgICBjb25zdCBsb2NhbGl6YXRpb25zID0gT2JqZWN0LnZhbHVlcyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubWFwKGtleSA9PiBrZXkuc3BsaXQoJy4nKS5wb3AoKSk7XG5cbiAgICByZXR1cm4gdHJhbnNsYXRpb25LZXlzLnJlZHVjZSgoYWNjLCBrZXksIGkpID0+IHtcbiAgICAgICAgYWNjW2tleV0gPSBsb2NhbGl6YXRpb25zW2ldO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbn07XG4iXSwibmFtZXMiOlsiZSIsInQiLCJyIiwiU3ltYm9sIiwibiIsIml0ZXJhdG9yIiwibyIsInRvU3RyaW5nVGFnIiwiaSIsImMiLCJwcm90b3R5cGUiLCJHZW5lcmF0b3IiLCJ1IiwiT2JqZWN0IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsImYiLCJwIiwieSIsIkciLCJ2IiwiYSIsImQiLCJiaW5kIiwibGVuZ3RoIiwibCIsIlR5cGVFcnJvciIsImNhbGwiLCJkb25lIiwidmFsdWUiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl9pbnZva2UiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJfaW5oZXJpdHNMb29zZSIsImNvbnN0cnVjdG9yIiwiX3NldFByb3RvdHlwZU9mIiwiUGFnZU1hbmFnZXIiLCJjaGVja0lzR2lmdENlcnRWYWxpZCIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsInV0aWxzIiwiU2hpcHBpbmdFc3RpbWF0b3IiLCJkZWZhdWx0TW9kYWwiLCJzaG93QWxlcnRNb2RhbCIsIk1vZGFsRXZlbnRzIiwiQ2FydEl0ZW1EZXRhaWxzIiwiQ2FydCIsIl9QYWdlTWFuYWdlciIsIl9wcm90byIsIm9uUmVhZHkiLCIkbW9kYWwiLCIkY2FydFBhZ2VDb250ZW50IiwiJCIsIiRjYXJ0Q29udGVudCIsIiRjYXJ0TWVzc2FnZXMiLCIkY2FydFRvdGFscyIsIiRjYXJ0QWRkaXRpb25hbENoZWNrb3V0QnRucyIsIiRvdmVybGF5IiwiaGlkZSIsIiRhY3RpdmVDYXJ0SXRlbUlkIiwiJGFjdGl2ZUNhcnRJdGVtQnRuQWN0aW9uIiwic2V0QXBwbGVQYXlTdXBwb3J0IiwiYmluZEV2ZW50cyIsIndpbmRvdyIsIkFwcGxlUGF5U2Vzc2lvbiIsImFkZENsYXNzIiwiY2FydFVwZGF0ZSIsIiR0YXJnZXQiLCJfdGhpcyIsIml0ZW1JZCIsImRhdGEiLCIkZWwiLCJvbGRRdHkiLCJwYXJzZUludCIsInZhbCIsIm1heFF0eSIsIm1pblF0eSIsIm1pbkVycm9yIiwibWF4RXJyb3IiLCJuZXdRdHkiLCJzaG93IiwiYXBpIiwiY2FydCIsIml0ZW1VcGRhdGUiLCJlcnIiLCJyZXNwb25zZSIsInN0YXR1cyIsInJlbW92ZSIsInJlZnJlc2hDb250ZW50IiwiZXJyb3JzIiwiam9pbiIsImNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlIiwicHJlVmFsIiwiX3RoaXMyIiwiTnVtYmVyIiwiaW52YWxpZEVudHJ5IiwiaXNJbnRlZ2VyIiwiY29udGV4dCIsImludmFsaWRFbnRyeU1lc3NhZ2UiLCJyZXBsYWNlIiwiY2FydFJlbW92ZUl0ZW0iLCJfdGhpczMiLCJpdGVtUmVtb3ZlIiwiY2FydEVkaXRPcHRpb25zIiwicHJvZHVjdElkIiwiX3RoaXM0IiwiYXNzaWduIiwicHJvZHVjdEZvckNoYW5nZUlkIiwibW9kYWwiLCJvcHRpb25zIiwidGVtcGxhdGUiLCJvcGVuIiwiZmluZCIsInByb2R1Y3RBdHRyaWJ1dGVzIiwiY29uZmlndXJlSW5DYXJ0IiwidXBkYXRlQ29udGVudCIsImNvbnRlbnQiLCJvcHRpb25DaGFuZ2VIYW5kbGVyIiwiJHByb2R1Y3RPcHRpb25zQ29udGFpbmVyIiwibW9kYWxCb2R5UmVzZXJ2ZWRIZWlnaHQiLCJvdXRlckhlaWdodCIsImNzcyIsImhhc0NsYXNzIiwib25lIiwib3BlbmVkIiwibW9kYWxGb3JtIiwib25TdWJtaXQiLCJfeCIsIl9vblN1Ym1pdCIsIl9jYWxsZWUiLCJldmVudCIsIl9jb250ZXh0IiwicHJldmVudERlZmF1bHQiLCJwb3N0Rm9ybURhdGEiLCJGb3JtRGF0YSIsImNsb3NlIiwib24iLCJwcm9kdWN0RGV0YWlscyIsImJpbmRHaWZ0V3JhcHBpbmdGb3JtIiwiaG9va3MiLCJjdXJyZW50VGFyZ2V0IiwiJGZvcm0iLCIkc3VibWl0IiwiJG1lc3NhZ2VCb3giLCJvcHRpb25DaGFuZ2UiLCJzZXJpYWxpemUiLCJyZXN1bHQiLCJwdXJjaGFzaW5nX21lc3NhZ2UiLCJ0ZXh0IiwicHJvcCIsInB1cmNoYXNhYmxlIiwiaW5zdG9jayIsIl90aGlzNSIsIiRjYXJ0SXRlbXNSb3dzIiwiJGNhcnRQYWdlVGl0bGUiLCJ0b3RhbHMiLCJwYWdlVGl0bGUiLCJzdGF0dXNNZXNzYWdlcyIsImFkZGl0aW9uYWxDaGVja291dEJ1dHRvbnMiLCJsb2NhdGlvbiIsInJlbG9hZCIsImdldENvbnRlbnQiLCJodG1sIiwicmVwbGFjZVdpdGgiLCJxdWFudGl0eSIsInRyaWdnZXIiLCJmaWx0ZXIiLCJiaW5kQ2FydEV2ZW50cyIsIl90aGlzNiIsImRlYm91bmNlVGltZW91dCIsIl9iaW5kIiwiX2RlYm91bmNlIiwiZm9jdXMiLCJvblF0eUZvY3VzIiwiY2hhbmdlIiwic3RyaW5nIiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJvbkNvbmZpcm0iLCJiaW5kUHJvbW9Db2RlRXZlbnRzIiwiX3RoaXM3IiwiJGNvdXBvbkNvbnRhaW5lciIsIiRjb3Vwb25Gb3JtIiwiJGNvZGVJbnB1dCIsImF0dHIiLCJjb2RlIiwiYXBwbHlDb2RlIiwiYmluZEdpZnRDZXJ0aWZpY2F0ZUV2ZW50cyIsIl90aGlzOCIsIiRjZXJ0Q29udGFpbmVyIiwiJGNlcnRGb3JtIiwiJGNlcnRJbnB1dCIsInRvZ2dsZSIsInZhbGlkYXRpb25EaWN0aW9uYXJ5IiwiaW52YWxpZF9naWZ0X2NlcnRpZmljYXRlIiwiYXBwbHlHaWZ0Q2VydGlmaWNhdGUiLCJyZXNwIiwiYmluZEdpZnRXcmFwcGluZ0V2ZW50cyIsIl90aGlzOSIsImdldEl0ZW1HaWZ0V3JhcHBpbmdPcHRpb25zIiwiY29uZmlybSIsImdpZnRXcmFwcGluZ1JlbW92ZU1lc3NhZ2UiLCIkc2VsZWN0IiwiaWQiLCJpbmRleCIsImFsbG93TWVzc2FnZSIsInRvZ2dsZVZpZXdzIiwiJHNpbmdsZUZvcm0iLCIkbXVsdGlGb3JtIiwic2hpcHBpbmdFcnJvck1lc3NhZ2VzIiwiY291bnRyeSIsInNoaXBwaW5nQ291bnRyeUVycm9yTWVzc2FnZSIsInByb3ZpbmNlIiwic2hpcHBpbmdQcm92aW5jZUVycm9yTWVzc2FnZSIsInNoaXBwaW5nRXN0aW1hdG9yIiwiZGVmYXVsdCIsInN0YXRlQ291bnRyeSIsIm5vZCIsIlZhbGlkYXRvcnMiLCJhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIiwiY29sbGFwc2libGVGYWN0b3J5IiwiJGVsZW1lbnQiLCIkc3RhdGUiLCJpc0VzdGltYXRvckZvcm1PcGVuZWQiLCJpbml0Rm9ybVZhbGlkYXRpb24iLCJiaW5kU3RhdGVDb3VudHJ5Q2hhbmdlIiwiYmluZEVzdGltYXRvckV2ZW50cyIsInNoaXBwaW5nRXN0aW1hdG9yQWxlcnQiLCJzaGlwcGluZ1ZhbGlkYXRvciIsInN1Ym1pdCIsInRhcCIsInJlbW92ZUF0dHIiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJiaW5kVmFsaWRhdGlvbiIsImJpbmRTdGF0ZVZhbGlkYXRpb24iLCJiaW5kVVBTUmF0ZXMiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJjb3VudHJ5SWQiLCJpc05hTiIsImVycm9yTWVzc2FnZSIsIiRlbGUiLCJlbGVWYWwiLCJVUFNSYXRlVG9nZ2xlIiwiJGVzdGltYXRvckZvcm1VcHMiLCIkZXN0aW1hdG9yRm9ybURlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsIiRsYXN0IiwidXNlSWRGb3JTdGF0ZXMiLCJmaWVsZCIsIkVycm9yIiwiJGZpZWxkIiwiZ2V0U3RhdHVzIiwiaXMiLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVFc3RpbWF0b3JGb3JtU3RhdGUiLCJ0b2dnbGVCdXR0b24iLCJidXR0b25TZWxlY3RvciIsIiR0b2dnbGVDb250YWluZXIiLCJjaGFuZ2VBdHRyaWJ1dGVzT25Ub2dnbGUiLCJzZWxlY3RvclRvQWN0aXZhdGUiLCIkZXN0aW1hdG9yQ29udGFpbmVyIiwiJGVzdGltYXRvckZvcm0iLCJwYXJhbXMiLCJjb3VudHJ5X2lkIiwic3RhdGVfaWQiLCJjaXR5IiwiemlwX2NvZGUiLCJnZXRTaGlwcGluZ1F1b3RlcyIsImNsaWNrRXZlbnQiLCJxdW90ZUlkIiwic3VibWl0U2hpcHBpbmdRdW90ZSIsIlByb2R1Y3REZXRhaWxzQmFzZSIsIm9wdGlvbkNoYW5nZURlY29yYXRvciIsImlzQnJvd3NlcklFIiwiY29udmVydEludG9BcnJheSIsIl9Qcm9kdWN0RGV0YWlsc0Jhc2UiLCIkc2NvcGUiLCJwcm9kdWN0QXR0cmlidXRlc0RhdGEiLCIkcHJvZHVjdE9wdGlvbnNFbGVtZW50IiwiaGFzT3B0aW9ucyIsInRyaW0iLCJoYXNEZWZhdWx0T3B0aW9ucyIsInNldFByb2R1Y3RWYXJpYW50Iiwib3B0aW9uQ2hhbmdlQ2FsbGJhY2siLCJfaXNFbXB0eSIsInVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzIiwidW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcyIsImVhY2giLCJvcHRpb25MYWJlbCIsImNoaWxkcmVuIiwiaW5uZXJUZXh0Iiwib3B0aW9uVGl0bGUiLCJzcGxpdCIsInJlcXVpcmVkIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInR5cGUiLCJnZXRBdHRyaWJ1dGUiLCJxdWVyeVNlbGVjdG9yIiwicHVzaCIsImlzU2F0aXNmaWVkIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImV2ZXJ5Iiwic2VsZWN0Iiwic2VsZWN0ZWRJbmRleCIsImRhdGVTdHJpbmciLCJtYXAiLCJ4IiwiY2hlY2tlZCIsImdldFNlbGVjdGVkT3B0aW9uTGFiZWwiLCJwcm9kdWN0VmFyaWFudHNsaXN0IiwibWF0Y2hMYWJlbEZvckNoZWNrZWRJbnB1dCIsImlucHQiLCJkYXRhc2V0IiwicHJvZHVjdEF0dHJpYnV0ZVZhbHVlIiwibGFiZWwiLCJsYWJlbHMiLCJ0aXRsZSIsInByb2R1Y3RWYXJpYW50Iiwic29ydCIsInZpZXciLCJwcm9kdWN0TmFtZSIsIm1hdGNoIiwiY2FyZCIsImNlcnQiLCJpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIiwibWFrZVN0YXRlUmVxdWlyZWQiLCJzdGF0ZUVsZW1lbnQiLCJhdHRycyIsIl90cmFuc2Zvcm0iLCJpdGVtIiwicmV0IiwibmFtZSIsInJlcGxhY2VtZW50QXR0cmlidXRlcyIsIiRuZXdFbGVtZW50IiwiJGhpZGRlbklucHV0IiwicHJldiIsImFwcGVuZCIsIm1ha2VTdGF0ZU9wdGlvbmFsIiwiYWRkT3B0aW9ucyIsInN0YXRlc0FycmF5IiwiJHNlbGVjdEVsZW1lbnQiLCJjb250YWluZXIiLCJwcmVmaXgiLCJzdGF0ZXMiLCJmb3JFYWNoIiwic3RhdGVPYmoiLCJjYWxsYmFjayIsImNvdW50cnlOYW1lIiwiZ2V0QnlOYW1lIiwic3RhdGVfZXJyb3IiLCIkY3VycmVudElucHV0IiwibmV3RWxlbWVudCIsIlRSQU5TTEFUSU9OUyIsImlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkiLCJkaWN0aW9uYXJ5Iiwia2V5cyIsImNob29zZUFjdGl2ZURpY3Rpb25hcnkiLCJKU09OIiwicGFyc2UiLCJ1bmRlZmluZWQiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04iLCJhY3RpdmVEaWN0aW9uYXJ5IiwibG9jYWxpemF0aW9ucyIsInZhbHVlcyIsInRyYW5zbGF0aW9uS2V5cyIsImtleSIsInBvcCIsInJlZHVjZSIsImFjYyJdLCJzb3VyY2VSb290IjoiIn0=