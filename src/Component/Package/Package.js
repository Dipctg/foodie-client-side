import React from 'react';
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import H3 from "@material-tailwind/react/Heading3";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";

const Package = (props) => {
    const { _id, package_name, img, details, price } = props.data;

    return (
        <div>
            <Card>
                <CardImage
                    src={img}
                    rounded={true}
                    raised={false}
                    alt="Card Image"
                />

                <CardBody>
                    <H6 color="gray">{package_name}</H6>
                    <H3 color="gray">Price: {price}</H3>
                </CardBody>

                <CardFooter>
                    <Button color="lightBlue" size="lg" ripple="light">
                        Choose your Food
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Package;