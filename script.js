window.addEventListener('load', function() {

    var artArray = [

        { 
            "id": 1, 
            "artist": "Pablo Picasso", 
            "art": "Les Demoiselles d'Avignon",
            "img_01": "http://www.leiweb.it/celebrity/personaggi-news/2011/gallery/img/11/picasso.jpg",
            "img_02": "http://i.huffpost.com/gen/831576/thumbs/s-PABLO-PICASSO-large640.jpg?4"
        },
        { 
            "id": 2, 
            "artist": "Andy Warhol", 
            "art": "Brillo Boxes",
            "img_01": "http://www.glenwoodnyc.com/manhattan-living/wp-content/uploads/2012/09/regarding-warhol-met-brillo-boxes.jpeg",
            "img_02": "http://artobserved.com/artimages/2008/10/warrol_presentazione.jpg"
        },
        { 
            "id": 3, 
            "artist": "Jackson Pollock", 
            "art": "One Number 31",
            "img_01": "http://www.moma.org/images/dynamic_content/exhibition_page/57560.jpg",
            "img_02": "https://thenypost.files.wordpress.com/2014/09/jacksonportrait.jpg"
        },
        { 
            "id": 4, 
            "artist": "Claude Monet", 
            "art": "The Stroll",
            "img_01": "https://artzonesdotnet.files.wordpress.com/2013/04/woman_parasol11.jpg",
            "img_02": "http://www.claude-monet.com/images/claude-monet.jpg"
        },
        { 
            "id": 5, 
            "artist": "Paul Cezanne", 
            "art": "Basket of Apples",
            "img_01": "http://www.thefamouspeople.com/profiles/images/paul-cezanne-2.jpg",
            "img_02": "https://learnodo-newtonic.com/wp-content/uploads/2014/02/The-Basket-of-Apples-by-Paul-Cezanne.jpg"
        },
        { 
            "id": 6, 
            "artist": "Georges Seurat", 
            "art": "Sunday on the Island of La Grande Jatte",
            "img_01": "http://static.standard.co.uk/s3fs-public/thumbnails/image/2014/03/28/12/Georges%20Seurat.jpg",
            "img_02": "http://www.ilibrarian.net/art/georges_seurat_a_sunday_on_the_grande_jatte_lg.jpg" 
        },
        { 
            "id": 7, 
            "artist": "Frida Kahlo", 
            "art": "The Two Fridas",
            "img_01": "http://www.tradesy.com/blog/wp-content/uploads/2015/07/Frida-Portrait-Thumbnail.jpg",
            "img_02": "http://www.fridakahlo.org/images/paintings/the-two-fridas.jpg"
        },
        { 
            "id": 8, 
            "artist": "Georgia O'Keefe", 
            "art": "Ram's Head with Hollyhock",
            "img_01": "http://www.flynnsfineart.com/wp-content/uploads/2014/03/georgia.jpg",
            "img_02": "http://www.georgiaokeeffe.net/images/paintings/rams-head.jpg"
        }

    ]
    
    ///////////// CODE BELOW /////////////

    // create a dynamic grid of squares
    function createGrid(v){
        var game = document.getElementById('game');
        for(var i = 1; i <= v; i++){
            var square = document.createElement('li');
            square.classList.add('square');
            game.appendChild(square);
        }
    }
    createGrid(16);

    var art_store = [];

    for (var i = 0; i < 8; i++){
        var randomIndex = Math.floor(Math.random(artArray.length));
        console.log(randomIndex);
        var art = artArray[randomIndex]
        console.log(art);
        // push two copies to the art store
        art_store.push(art);
        art_store.push(art);
        // remove the art from the array so it's not selected again
        artArray.splice(randomIndex, 1);
    }

    // ok, so they are in the store
    console.log(art_store);

    // now, shuffle the art (random sort or fisher-yeats shuffle)

    // loop through grid and add random images

});
