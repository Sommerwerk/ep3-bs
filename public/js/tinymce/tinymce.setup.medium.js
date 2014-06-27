(function() {

    $(document).ready(function() {

        var language = $("html").attr("lang");

        if (language === 'en-US') {
            language = undefined;
        }

        tinymce.init({
            "selector": ".wysiwyg-editor",
            "language": language,
            "plugins": "image media link table charmap code",
            "content_css": "/css/tinymce/default.min.css",
            "toolbar": "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media table | charmap code",
            "menubar": false,
            "statusbar": false,
            "relative_urls": false
        });

    });

})();