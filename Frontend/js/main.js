(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });




    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

// Portfolio isotope and filter
var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows',
    onLayout: function() {
        centerSingleCards();
    }
});

function centerSingleCards() {
    $('.portfolio-container').each(function() {
        var $container = $(this);
        var $items = $container.find('.portfolio-item:visible');
        
        if ($items.length === 1) {
            // Force center the single item
            $container.css({
                'display': 'flex',
                'justify-content': 'center'
            });
            $items.css({
                'margin-left': '0',
                'margin-right': '0',
                'float': 'none'
            });
        } else {
            // Reset for multiple items
            $container.css({
                'display': '',
                'justify-content': ''
            });
            $items.css({
                'margin-left': '',
                'margin-right': '',
                'float': ''
            });
        }
    });
}

$('#portfolio-flters li').on('click', function() {
    $("#portfolio-flters li").removeClass('active');
    $(this).addClass('active');
    
    portfolioIsotope.isotope({filter: $(this).data('filter')});
});

// Run on initial load and after images load
$(window).on('load', function() {
    setTimeout(centerSingleCards, 300);
    portfolioIsotope.imagesLoaded().progress(function() {
        centerSingleCards();
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Debugging: Log when DOM is loaded
    console.log('DOM fully loaded and parsed');
    
    const form = document.querySelector('form');
    let messageDiv = document.getElementById('form-message');

    // Debugging: Check if elements exist
    console.log('Form element:', form);
    console.log('Message div:', messageDiv);

    // Create message div if it doesn't exist
    if (!messageDiv && form) {
        console.log('Creating message div dynamically');
        messageDiv = document.createElement('div');
        messageDiv.id = 'form-message';
        messageDiv.style.display = 'none';
        form.appendChild(messageDiv);
    }

    function showMessage(text, type) {
        console.log('Attempting to show message:', text);
        if (!messageDiv) {
            console.error('Message div not found!');
            return;
        }
        
        // Apply basic styles if CSS isn't working
        messageDiv.style.padding = '10px 15px';
        messageDiv.style.margin = '15px 0';
        messageDiv.style.borderRadius = '4px';
        messageDiv.style.fontSize = '14px';
        
        // Set content and classes
        messageDiv.textContent = text;
        messageDiv.className = type;
        messageDiv.style.display = 'block';
        
        // Set colors based on type
        if (type === 'success') {
            messageDiv.style.backgroundColor = '#d4edda';
            messageDiv.style.color = '#155724';
            messageDiv.style.border = '1px solid #c3e6cb';
        } else {
            messageDiv.style.backgroundColor = '#f8d7da';
            messageDiv.style.color = '#721c24';
            messageDiv.style.border = '1px solid #f5c6cb';
        }
        
        // Hide after 5 seconds
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    }

    // Check URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');
    console.log('URL status parameter:', status);
    
    if (status === 'success') {
        showMessage('Thank you! Your message has been sent successfully.', 'success');
        history.replaceState(null, '', window.location.pathname);
    } else if (status === 'error') {
        showMessage('There was an error sending your message. Please try again.', 'error');
        history.replaceState(null, '', window.location.pathname);
    }

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted');
            
            const submitButton = form.querySelector('button[type="submit"]');
            if (!submitButton) {
                console.error('Submit button not found!');
                return;
            }
            
            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            
            // Send form data
            fetch('contact.php', {
                method: 'POST',
                body: new FormData(form)
            })
            .then(response => {
                console.log('Form submission complete, reloading');
                window.location.href = 'contact.html?status=success';
            })
            .catch(error => {
                console.error('Form submission error:', error);
                showMessage('There was a network error. Please try again.', 'error');
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            });
        });
    }
});
