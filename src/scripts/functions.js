//  this is a test

var pageFunctions = {
    intialize: function () {
      console.log('works');
      var self=this;
      this.intializeWatchers(); //listens for clicks
    },
    intializeWatchers: function () {
      var self=this;
    },
    initializeIndex: function () {
        var self=this;
        viewportSize = window.innerHeight;
        self.detectScroll(viewportSize);
    },
    initializeSinglePage: function () {
        var self=this;

        document.getElementById('share-button').addEventListener("click", function(){
            self.handleCardFlip();
            self.testCopy();
        });
        document.getElementById('cancel-button').addEventListener("click", function(){
            self.handleCardFlip()
        });


        var copyButton = document.getElementById('copy-button');
        copyButton.addEventListener("click", function(){
          var embedCode = document.getElementById('embed-code');
          self.handleCopy(copyButton, embedCode);
        });
        var URLcopyButton = document.getElementById('url-copy-button');
        URLcopyButton.addEventListener("click", function(){
          var URLembedCode = document.getElementById('url-embed-code');
          self.handleCopy(URLcopyButton, URLembedCode);
        });
    },
     detectScroll: function (viewportSize) {
       var self=this,
           position;
        document.onscroll = function() {
          var position = window.scrollY,
              header = document.getElementById('siteheader'),
              placeholder = document.getElementById('siteheader-placeholder'),
              headerPosition = self.getHeaderPosition(),
              placeholderPosition = placeholder.getBoundingClientRect().top;

          self.handleHeaderPinning(position, headerPosition, placeholderPosition)
          self.handleReefer(position, headerPosition);
          self.handleHeaderImage(position, viewportSize);
        }
        return position;
     },
     handleHeaderImage: function (position, headerHeight) {
        var self=this;
        var target = document.getElementById('header-image'),
            activeTest = target.classList.contains('header-image--active'),
            targetHead = document.getElementById('main-head'),
            secondaryHead = document.getElementById('secondary-head');
            bodyText = document.getElementById('entry-wrapper');


          if (position >= headerHeight * .5 && activeTest === false) {
            target.classList.add('header-image--active');
            targetHead.classList.add('main-head--active');
            secondaryHead.classList.add('secondary-head--active');
            bodyText.classList.add('entry-wrapper--active')
          }
          if (position <= headerHeight * .5 && activeTest) {
            target.classList.remove('header-image--active');
            targetHead.classList.remove('main-head--active');
            secondaryHead.classList.remove('secondary-head--active');
            bodyText.classList.remove('entry-wrapper--active')
          }
     },
     handleHeaderPinning: function (position, headerPosition, placeholderPosition) {
        var self=this;
        var header = document.getElementById('siteheader'),
            placeholder = document.getElementById('siteheader-placeholder'),
            headerActive = header.classList.contains('siteheader--active');

       if (placeholderPosition <= headerPosition && headerActive === false) {
         header.classList.add('siteheader--active');
         placeholder.classList.add('siteheader-placeholder--active');
       }
        if (placeholderPosition >= headerPosition && headerActive === true) {
          header.classList.remove('siteheader--active');
          placeholder.classList.remove('siteheader-placeholder--active');
        }
     },
     handleReefer: function(position, headerPosition) {
       var self=this;
       var reefers = document.getElementById('reefers'),
           activeState = reefers.classList.contains('reefers-wrapper--active');

        if (position >= headerPosition * .8 && activeState === false) {
          reefers.classList.add('reefers-wrapper--active')
        }
        if (position <= headerPosition * .8 && activeState === true) {
          reefers.classList.remove('reefers-wrapper--active')
        }
     },
     handleCardFlip: function () {
       var self=this;
      var card = document.getElementById('flip-card');
      var active = card.classList.contains('flip-card--active');

        if (active == false) {
          card.classList.add('flip-card--active');
          card.classList.add('flip-card--trans');
        }
        if (active == true) {
          card.classList.remove('flip-card--active')
          card.classList.add('flip-card--activeToo');

            setTimeout(function(){
              card.classList.remove('flip-card--trans');
              card.classList.remove('flip-card--activeToo');

            }, 700);
        }
     },
     getHeaderPosition: function () {
       var self=this;
       var viewportSize = window.innerHeight,
           headerHeight = document.getElementById('siteheader').offsetHeight;
       return headerPos = viewportSize - (viewportSize * .05) - headerHeight;
     }
  };
