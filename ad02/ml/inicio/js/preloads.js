
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/polyfills.CG3oGVWg.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/app.BJuZSJAp.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/OnePage.CAzgpwm1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/DeliveryMethodSelectorSection.D-LQAcYp.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useUnauthenticatedErrorModal.VfMjpt57.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/LegacyVaultedShippingMethods.Dwa9JDO8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/Rollup.9dQjjwV9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/SubscriptionPriceBreakdown.CDhhSYih.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/MarketsProDisclaimer.Bf2O2r5l.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/ShopPayLogo.Bxj08nv4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/index.CXCUetF1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/PickupPointCarrierLogo.C2ABpE-G.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/hooks.CyYQm5aS.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/VaultedPayment.CYK_F4kf.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useShowShopPayOptin.tUcQYiS7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useShopPayRequiresVerification.CWc9HwoX.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/Section.Csq6WZ7y.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useGooglePaySdk.vgJ2Qq7q.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/ShopPayLoginLoader.82PUrjBM.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/publishMessage.l1nHCUkf.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/PayButtonSection.JOAzmomu.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/RageClickCapture.tljUqiwq.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/context.CbcFmXCk.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/DutyOptions.Cw55B-ah.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useAmazonContact.BrUSw3Vf.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/StockProblemsLineItemList.CnVepjBq.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/component-ShopPayVerificationSwitch.y2cTuxia.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/index.fhFUKzyw.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/app.CGQl-irG.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/OnePage.BsDM6oHQ.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/DeliveryMethodSelectorSection.DNerkzQV.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/Rollup.o9Mx-fKL.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/SubscriptionPriceBreakdown.Bqs0s4oM.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/ShopPayLogo.D_HPU8Dh.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/PickupPointCarrierLogo.C0wRU6wV.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/VaultedPayment.BO3829nT.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/Section.BzDw6wmZ.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/ShopPayLoginLoader.CjGSo8kt.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/PayButtonSection.DF7trkKf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/RageClickCapture.DnkQ4tsk.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/DutyOptions.Bd1Z60K2.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/useAmazonContact.D-Ox6Dnf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/StockProblemsLineItemList.CxdIQKjw.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/ShopPayVerificationSwitch.DVQdwG9J.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  