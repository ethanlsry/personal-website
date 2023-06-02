import React from 'react';
import { Card } from 'antd';
import { useNavigate } from "react-router-dom";


function Project({proj_name, title, description, img_url, ext, endpoint}) {
    const { Meta } = Card;
    const titleStyle = {
        fontSize: '140%',
        fontFamily: 'Lato',
    }
    const cardStyle = {
        width:'90%',
        strong: 'true',
        fontFamily: 'Lato',
        fontSize: '110%'
    }

    const navigate = useNavigate();

    function handleProjClick(ext, endpoint){
        if (ext){
            window.open(endpoint, '_blank');
        } else {
            window.scrollTo(0, 0)
            navigate(endpoint)
        }
    }
    return (
        <>
            <Card className="card_item"
                onClick={() => handleProjClick(ext, endpoint)}
                style={cardStyle}
                cover={
                    <img
                        alt="title"
                        src={img_url}
                    />
                }
                hoverable={true}
                >
                <Meta
                    title={<p style={titleStyle}>{title}</p>}
                    description={description}
                />
            </Card>
        </>
    );
};

export default Project;