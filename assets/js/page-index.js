(function() {
    // Data Blob
    // =============================================================================
    // The main "blob" of site data constructed by liquid
    // We cherry pick to minimize size
    // Also because jsonify doesn't work quite right and collapses the page objects
    // into just strings when we jsonify the whole site
    var pages = [{
                name: "02-getting-started.md",
                title: "Getting Started",
                url: "/opendoc-docs/02-getting-started.html",
                escapedPath: "02-getting-started.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Opendoc Docs",null,["01-introduction.md","02-getting-started.md","03-using-markdown.md","04-contribute.md","05-deploying-to-amplify.md","99-useful-references.md"]]
            },
            
        {
                name: "03-using-markdown.md",
                title: "Using Markdown",
                url: "/opendoc-docs/03-using-markdown.html",
                escapedPath: "03-using-markdown.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Opendoc Docs",null,["01-introduction.md","02-getting-started.md","03-using-markdown.md","04-contribute.md","05-deploying-to-amplify.md","99-useful-references.md"]]
            },
            
        {
                name: "04-contribute.md",
                title: "Contribute",
                url: "/opendoc-docs/04-contribute.html",
                escapedPath: "04-contribute.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Opendoc Docs",null,["01-introduction.md","02-getting-started.md","03-using-markdown.md","04-contribute.md","05-deploying-to-amplify.md","99-useful-references.md"]]
            },
            
        {
                name: "99-useful-references.md",
                title: "Useful References",
                url: "/opendoc-docs/99-useful-references.html",
                escapedPath: "99-useful-references.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Opendoc Docs",null,["01-introduction.md","02-getting-started.md","03-using-markdown.md","04-contribute.md","05-deploying-to-amplify.md","99-useful-references.md"]]
            },
            
        
        
        {
                name: "01-introduction.md",
                title: "01Introduction",
                url: "/opendoc-docs/01-introduction.html",
                escapedPath: "01-introduction.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Opendoc Docs",null,["01-introduction.md","02-getting-started.md","03-using-markdown.md","04-contribute.md","05-deploying-to-amplify.md","99-useful-references.md"]]
            },
            
        {
                name: "05-deploying-to-amplify.md",
                title: "Deploying to Amplify",
                url: "/opendoc-docs/05-deploying-to-amplify.html",
                escapedPath: "05-deploying-to-amplify.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Opendoc Docs",null,["01-introduction.md","02-getting-started.md","03-using-markdown.md","04-contribute.md","05-deploying-to-amplify.md","99-useful-references.md"]]
            },
            
        
    ]

    var pageIndex = {}
    var documentList = {}

    pages.forEach(function(page) {
        pageIndex[page.url] = page
        var documentTitle = page.documentInfo ? page.documentInfo[0] : 'root'
        if (documentList[documentTitle]) {
            documentList[documentTitle].push(page)
        } else {
            documentList[documentTitle] = [page]
        }
    })

    // Expose as global var
    root = typeof exports !== 'undefined' && exports !== null ? exports : this

    root.pageIndex = pageIndex;
    root.documentList = documentList;
})()