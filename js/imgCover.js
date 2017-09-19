function ImgCover(sSelector) {

  var i = this;

  i.articles = $(sSelector);
  i.wrap = i.articles.find('.articleImg__wrap');
  i.img = i.wrap.find('.article__img');

  i.cover = function () {
   $(i.wrap).each(function () {

    var img = $(this).find('.article__img'),
     src = img.attr('src');

    $(this).css({ background: 'url(' + src + ') no-repeat scroll center center' } );
    $( this ).css( { "backgroundSize": "cover" } );

   } );

   i.img.hide();

  };

	$(document).ready(i.cover);

}
