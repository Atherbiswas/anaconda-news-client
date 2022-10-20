import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGoogle, FaGithub, FaDiscord, FaFacebook, FaYoutube, FaWhatsapp, FaTwitter} from "react-icons/fa";
import BrandCoursel from '../BrandCarousel/BrandCoursel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2 rounded' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button className='rounded' variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-2'>
                <h6>Find us on</h6>
                <ListGroup>
                    <ListGroup.Item className="mb-3 border border-0 shadow"> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className="mb-3 border border-0 shadow"> <FaYoutube></FaYoutube> YouTube</ListGroup.Item>
                    <ListGroup.Item className="mb-3 border border-0 shadow"> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className="mb-3 border border-0 shadow"> <FaWhatsapp></FaWhatsapp> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className="mb-3 border border-0 shadow"> <FaDiscord></FaDiscord> Discord</ListGroup.Item>
                    <ListGroup.Item className="mb-3 border border-0 shadow">Privacy Policy</ListGroup.Item>
                    <ListGroup.Item className="mb-3 border border-0 shadow">Terms & Condition</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCoursel></BrandCoursel>
            </div>
        </div>
    );
};

export default RightSideNav;