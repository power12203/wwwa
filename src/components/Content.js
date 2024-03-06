import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
 margin: 10px auto;
 width: 300px;
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 border: 1px solid #000;
 box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38);
 border-radius: 5px;
`
const Img = styled.img`
 margin: 10px;
 margin-right: 30px;
 width: 100px;
 height: 90px;
 border-radius: 5px;
 
`




export default  function Content ({img}) {
    console.log(img)
    return (
        <Div>
            <Img src={img} alt=''/>
            <div>
                <div>dog</div>
                <div>Content</div>
            </div>
        </Div>
    );
};
