import React from 'react';
import { GridColumn, Grid, Image, Rail, Segment } from 'semantic-ui-react';
import aboutPic from '../assets/identity.png';

const InfoCard = () => (
  <>
    <Grid centered columns={2}>
      <GridColumn>
        <Segment>
          <h1>Why Post Anonymously?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac
            turpis egestas maecenas pharetra convallis posuere. Id diam maecenas
            ultricies mi eget mauris pharetra et. Fringilla phasellus faucibus
            scelerisque eleifend donec. Massa id neque aliquam vestibulum morbi
            blandit cursus risus at. Turpis in eu mi bibendum. Orci dapibus
            ultrices in iaculis nunc sed augue lacus. Vitae justo eget magna
            fermentum iaculis eu. Placerat orci nulla pellentesque dignissim
            enim sit. Ut placerat orci nulla pellentesque dignissim enim. Quis
            viverra nibh cras pulvinar mattis nunc sed blandit. At elementum eu
            facilisis sed odio morbi quis. Pretium quam vulputate dignissim
            suspendisse in est ante. Scelerisque purus semper eget duis at
            tellus at urna. Iaculis eu non diam phasellus vestibulum lorem sed
            risus ultricies. Quam lacus suspendisse faucibus interdum posuere
            lorem. Non enim praesent elementum facilisis leo vel. Tincidunt id
            aliquet risus feugiat in ante. Ut venenatis tellus in metus
            vulputate. Tellus integer feugiat scelerisque varius morbi enim nunc
            faucibus a. Eget velit aliquet sagittis id consectetur purus. Massa
            eget egestas purus viverra accumsan in. Nullam ac tortor vitae purus
            faucibus ornare. Congue mauris rhoncus aenean vel elit scelerisque.
            Sed blandit libero volutpat sed cras ornare arcu. Diam maecenas
            ultricies mi eget mauris pharetra et ultrices. Sit amet mauris
            commodo quis. Id ornare arcu odio ut sem nulla. Ullamcorper
            malesuada proin libero nunc. Nisi vitae suscipit tellus mauris a
            diam maecenas sed. Mauris rhoncus aenean vel elit scelerisque
            mauris. Phasellus egestas tellus rutrum tellus pellentesque eu
            tincidunt tortor aliquam.
          </p>
          <Rail position="left">
            <Segment>
              <Image src={aboutPic} />
            </Segment>
          </Rail>
        </Segment>
      </GridColumn>
    </Grid>
  </>
);

export default InfoCard;
