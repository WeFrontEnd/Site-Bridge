

$(function() {
  smoothScroll(1000);
  workBelt();
  workLoad();
  teamStuff();
  
  
});
// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}


function workBelt() {

  $('.thumb-unit').click(function() {
    $('.work-belt').css('left','-100%');
    $('.work-container').show();
  });
  
  $('.work-return').click(function(){
    
  $('.work-belt').css('left','0%');
  $('.work-container').hide(800);
    
    
  });

}


//Work load spinner and title chench and photo
function workLoad() {

   $.ajaxSetup({ cache: true });
  
   $('.thumb-unit').click(function() {
    
     var $this = $(this),
       newTitle = $this.find('strong').text(),  
       newFolder = $this.data('folder'),
       spinner = '<div class="loader">Loading...</div>',
       newHTML = '/work/'+ newFolder +'.html';
     
     $('.project-load').html(spinner).load(newHTML);
     $('.project-title').text(newTitle);
  });

 }

function teamStuff() {
  
  $('.team-unit').first().addClass('active-client');
  $('.team-logo').first().addClass('active-client');
  $('.team-mobile-nav span').first().addClass('active-client');
  
  
  $('.team-logo, .team-mobile-nav span').click(function() {
    var $this = $(this),
        $siblings = $this.parent().children(),
        position = $siblings.index($this);
    
    $('.team-unit').removeClass('active-client').eq(position).addClass('active-client');
    $siblings.removeClass('active-client');
    $this.addClass('active-client');
  });
  
 $('.team-control-next, .team-control-prev').click(function() {
  
    var $this = $(this),
        curActiveClient = $('.team-belt').find('.active-client'),
        position = $('.team-belt').children().index(curActiveClient),
        clientNum = $('.team-unit').length;
        
      if($this.hasClass('team-control-next')) {
        
        if(position < clientNum -1){
          $('.active-client').removeClass('active-client').next().addClass('active-client');
        } else {
          $('.team-unit').removeClass('active-client').first().addClass('active-client');
          $('.team-logo').removeClass('active-client').first().addClass('active-client');
          $('.team-button').removeClass('active-client').first().addClass('active-client');
        }
        
      } else {
        
        if (position === 0) {
          $('.team-unit').removeClass('active-client').last().addClass('active-client');
          $('.team-logo').removeClass('active-client').last().addClass('active-client');
          $('.team-button').removeClass('active-client').last().addClass('active-client');
        } else {
          $('.active-client').removeClass('active-client').prev().addClass('active-client');  
        }

      }
        
  
  });
  
}