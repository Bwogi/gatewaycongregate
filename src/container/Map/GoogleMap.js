import React from 'react'

const GoogleMap = () => {
    return (
        <div className="google-map-area section text-center section-padding-bottom">
            <div className="container">
                <div className="contact-map-area" data-aos="fade-up">
                    <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3299.638130488943!2d-118.54163932622743!3d34.206721209560975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29bd1886dbb81%3A0xe6f77bc3bad7a182!2s7504%20Capps%20Ave%2C%20Reseda%2C%20CA%2091335!5e0!3m2!1sen!2sus!4v1684652007759!5m2!1sen!2sus"  aria-hidden="false"></iframe>
                </div>
            </div>
        </div>
    )
}

export default GoogleMap;
