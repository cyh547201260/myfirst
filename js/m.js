var loaderimages = {
    progress : $(".load_val"),
    init : function() {
        this.preload();
    },

    preload : function() {
        var _this = this;
        _this.preloadAssets(_this.allImages, "", function(e) { 
            var percent = Math.floor((e.completedCount / e.totalCount)*100);
            _this.setPreloaderPercent(percent)
        }, function(e) {
            _this.loaderComplete();
        });
    },

    preloadAssets : function(assets, prefix, progress, complete) {
        var imageTypes = ['jpg', 'png', 'jpeg','gif'];
        var loader = new PxLoader();
        for(var i = 0; i < assets.length; i++) {
            var extension = assets[ i ].substr( (assets[ i ].lastIndexOf('.') +1) );

            if ($.inArray(extension, imageTypes) != -1) {
                loader.add(new PxLoaderImage(assets[i] )); 
            }
        }
        loader.addProgressListener(progress);
        loader.addCompletionListener(complete);
        loader.start();
    },

    setPreloaderPercent: function( percentage ) {
        $(".percentage").html(percentage+"%");
    },

    loaderComplete : function(){
        $(".loading").hide();
    },
        
    allImages: [
        "images/dian.png"
    ]
};

$(function(){
    loaderimages.init();
})