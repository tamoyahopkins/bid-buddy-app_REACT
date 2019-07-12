import React, {Component} from 'react'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Form,
} from 'semantic-ui-react'
import logo from "../images/bid_buddy_logo_3.png";

const GridExampleCelledInternally = () => (
<React.Fragment>
    <div id="clientAccount-Container">
        {/* image div */}
        <div id="logo-div">
            <img class="accountLogos" src="https://s3-media4.fl.yelpcdn.com/bphoto/KImy2lcnme23Q8jeUQ7s_A/ls.jpg"></img>
            <h1 id="clientAccountPage-headerText"> Account Page </h1>
            <img id="accountLogos-Right" class="accountLogos" src={logo}></img>
        </div>
        {/* navbar div */}
        <div id="clientPageNav">
            <div><span>You have <strong>0</strong> bids unanswered.</span></div>
            <div id="clientPageNav-buttons">
                <button>Profile</button>
                <button>Logout</button>
            </div>
        </div>
        {/* feed container div */}
        <div id="feedContainer">
            <div id="leftCol">
                <div>
                    <h2>Product Dash</h2>       
                    <h3 class="header-text">Catagory</h3>
                    <button class="dash-button">+</button>
                </div>
                <div>
                    <h3 class="header-text">Brand</h3>
                    <button class="dash-button">+</button>
                </div>
                <div>
                    <h3 class="header-text">Volume</h3>
                    <button class="dash-button">+</button>
                </div>
            </div>
            <div id="rightCol">
                {/* BID CARD: will append to the page */}
                <div id="bidCard-Container">
                    <img id="bidCard-section-left" class="bidCard-section" src="http://s7d4.scene7.com/is/image/BonTon/1366594?$ibm_large$"></img>
                    <div id="bidCard-section-middle" class="bidCard-section">
                        <label><strong>Item ID:</strong> <text>190561642822</text></label>
                        <br></br>
                        <label><strong>Item Name: </strong><text>MICHAEL Michael Kors "Kendrick" Slip On Shoes</text></label>
                        <br></br>
                        <label><strong>Description: </strong><text>Here is my first item description...Here is my first item description...Here is my first item description...Here is my first item description...Here is my first item description...Here is my first item description...Here is my first item description...Here is my first item description...</text></label>
                    </div>
                    <div id="bidCard-section-right" class="bidCard-section">
                        <button class="bidResponseButton">Accept</button>
                        <button class="bidResponseButton">Decline</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</React.Fragment>
)

export default GridExampleCelledInternally


//-------archive code------------//
//<Grid celled='internally'>
//     <Grid.Row>
//       <Grid.Column width={16} style={{ height: '5em' }}>
//         <Image style={{ height: '60px'}} floated="left" src="https://s3-media4.fl.yelpcdn.com/bphoto/KImy2lcnme23Q8jeUQ7s_A/ls.jpg" />
//         <Image style={{ height: '60px' }} floated="right" src={logo} />
//       </Grid.Column>
//     </Grid.Row>
//     <Grid.Row>
//         <Menu>
//             <Menu.Item floated="right" >Profile </Menu.Item>
//             <Menu.Item floated="left" >Logout</Menu.Item>
//         </Menu>
//     </Grid.Row>

//     <Grid.Row>
//       <Grid.Column width={4}>
//         <Image src='/images/wireframe/image.png' />
//       </Grid.Column>
//       <Grid.Column width={12}>
//         <Image src='/images/wireframe/paragraph.png' />
//       </Grid.Column>
//     </Grid.Row>
//   </Grid>
// class ClientAccount extends Component {
//     render(){
//         return(
//             <Grid>
//                 {/* account logos */}
//                 <Grid.Row id="account-page-logos" >
//                     <Menu>
//                     <Menu.Item floated="left" size="mini" src={logo}/>
//                     <Image floated="right" size="mini" src={logo}/>
//                     </Menu>
//                 </Grid.Row>
               
//                 {/* insert nav bar */}
//                 <Grid.Row> NAV BAR</Grid.Row>

//                 {/* insert dashboard and feed page */}
//                 <Container>
//                     <Grid.Row>
//                         <Grid.Column width={4}></Grid.Column>
//                         <Grid.Column width={12}></Grid.Column>

//                     </Grid.Row>
//                 </Container>

//             </Grid>
//         )
//     }
// }

// export default ClientAccount; 

// const FixedMenuLayout = () => (
//     <div>
//         <Segment>
//             <Image floated="left" size="mini" src={logo}></Image>
//             <Image floated="right" size="mini" src={logo}></Image>
//         </Segment>
//         <Menu fixed='top' >
//         <Container text style={{ marginTop: '2em' }}>
//               <Menu.Item> <Image floated="left" size="mini" src={logo}/></Menu.Item>
//               <Menu.Item> <Image floated="right" size="mini" src={logo}/></Menu.Item>
//               </Container>
//         </Menu>
//       <Menu fixed='top' >
//         <Container>
//           <Menu.Item as='a' header>
//             <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
//             Project Name
//           </Menu.Item>
//           <Menu.Item as='a'>Home</Menu.Item>
  
        //   <Dropdown item simple text='Dropdown'>
        //     <Dropdown.Menu>
        //       <Dropdown.Item>List Item</Dropdown.Item>
        //       <Dropdown.Item>List Item</Dropdown.Item>
        //       <Dropdown.Divider />
        //       <Dropdown.Header>Header Item</Dropdown.Header>
        //       <Dropdown.Item>
        //         <i className='dropdown icon' />
        //         <span className='text'>Submenu</span>
        //         <Dropdown.Menu>
        //           <Dropdown.Item>List Item</Dropdown.Item>
        //           <Dropdown.Item>List Item</Dropdown.Item>
        //         </Dropdown.Menu>
        //       </Dropdown.Item>
        //       <Dropdown.Item>List Item</Dropdown.Item>
        //     </Dropdown.Menu>
//           </Dropdown>
//         </Container>
//       </Menu>
  
//       <Container text style={{ marginTop: '7em' }}>
//         <Header as='h1'>Semantic UI React Fixed Template</Header>
//         <p>This is a basic fixed menu template using fixed size containers.</p>
//         <p>
//           A text container is used for the main container, which is useful for single column layouts.
//         </p>
  
//         <Image src='/images/wireframe/media-paragraph.png' style={{ marginTop: '2em' }} />
//         <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
//         <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
//         <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
//         <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
//         <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
//         <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
//       </Container>
  
//       <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
//         <Container textAlign='center'>
//           <Grid divided inverted stackable>
//             <Grid.Column width={3}>
//               <Header inverted as='h4' content='Group 1' />
//               <List link inverted>
//                 <List.Item as='a'>Link One</List.Item>
//                 <List.Item as='a'>Link Two</List.Item>
//                 <List.Item as='a'>Link Three</List.Item>
//                 <List.Item as='a'>Link Four</List.Item>
//               </List>
//             </Grid.Column>
//             <Grid.Column width={3}>
//               <Header inverted as='h4' content='Group 2' />
//               <List link inverted>
//                 <List.Item as='a'>Link One</List.Item>
//                 <List.Item as='a'>Link Two</List.Item>
//                 <List.Item as='a'>Link Three</List.Item>
//                 <List.Item as='a'>Link Four</List.Item>
//               </List>
//             </Grid.Column>
//             <Grid.Column width={3}>
//               <Header inverted as='h4' content='Group 3' />
//               <List link inverted>
//                 <List.Item as='a'>Link One</List.Item>
//                 <List.Item as='a'>Link Two</List.Item>
//                 <List.Item as='a'>Link Three</List.Item>
//                 <List.Item as='a'>Link Four</List.Item>
//               </List>
//             </Grid.Column>
//             <Grid.Column width={7}>
//               <Header inverted as='h4' content='Footer Header' />
//               <p>
//                 Extra space for a call to action inside the footer that could help re-engage users.
//               </p>
//             </Grid.Column>
//           </Grid>
  
//           <Divider inverted section />
//           <Image centered size='mini' src='/logo.png' />
//           <List horizontal inverted divided link size='small'>
//             <List.Item as='a' href='#'>
//               Site Map
//             </List.Item>
//             <List.Item as='a' href='#'>
//               Contact Us
//             </List.Item>
//             <List.Item as='a' href='#'>
//               Terms and Conditions
//             </List.Item>
//             <List.Item as='a' href='#'>
//               Privacy Policy
//             </List.Item>
//           </List>
//         </Container>
//       </Segment>
//     </div>
//   )
  
//   export default FixedMenuLayout
//test