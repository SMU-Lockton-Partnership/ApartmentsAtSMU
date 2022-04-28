import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";
// core components

function WhiteNavbar() {
  const [bodyClick, setBodyClick] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    localStorage.setItem("apartments", JSON.stringify([
      {"id":0,"name": "The Standard Apartments", "units": [0,1,2], "address": "5920 E University Blvd, Dallas, TX 75206", "price": [1500, 2425], "sqft": [597, 1229], "history": [2000, 2100, 2300, 2300, 2400, 2700, 2600, 2300, 2000, 2100, 1900, 2100], "predict": [2100, 2100, 2000, 1900, 1900, 1800], "trend": true, "url": "https://www.thestandardliving.com/", "listings": "https://www.thestandardliving.com/floor-plans.aspx", "desc": "At The Standard, you'll find all the necessities you need for easy living. Combining luxury apartments with premier amenities and a convenient northeast Dallas, TX neighborhood, you won't want to live anywhere else. These pet-friendly apartments feature stunning interiors with comfort and convenience in every room."},
      {"id":1,"name": "Jewel on Landmark", "units": [1,2], "address": "14650 Landmark Blvd, Dallas, TX 75254", "price": [1580, 2964], "sqft": [508, 1626], "history": [2000, 2100, 2300, 2300, 2400, 2700, 2600, 2300, 2000, 2100, 1900, 2100], "predict": [2100, 2300, 2400, 2500, 2500, 2700], "trend": false, "url": "https://www.jewelonlandmark.com/", "listings": "https://jewelonlandmark.securecafe.com/onlineleasing/jewel-on-landmark/floorplans", "desc": "Welcome to the Jewel on Landmark! Experience resort-style living in an urban oasis of excitement. Located in the heart of Addison, Texas, our stunning community is easily accessible to premium shopping, bustling entertainment, exquisite dining, and more! You’re just minutes from a variety of retail, dining, and entertainment options, including Village on the Parkway and the Galleria Dallas."},
      {"id":2,"name": "Arrive on University", "units": [1,2], "address": "5750 E University Blvd, Dallas, TX 75206", "price": [1640, 2425], "sqft": [508, 3175], "history": [2000, 2100, 2300, 2300, 2400, 2700, 2600, 2300, 2000, 2100, 1900, 2100], "predict": [2100, 2100, 2000, 1900, 1900, 1800], "trend": true, "url": "https://www.arriveonuniversity.com/", "listings": "https://www.arriveonuniversity.com/dallas-tx-apartments/arrive-on-university/conventional/", "desc": "At Arrive on University, you'll experience the excitement of big-city life in the heart of the sprawling Dallas metroplex. Whether you commute, study, travel, or enjoy the occasional weekend excursion, our easy access to I-30 and the 75 opens every avenue to elevated living. Our pet-friendly community provides spacious one and two-bedroom floor plans featuring some of the largest living spaces in Dallas."},
      {"id":3,"name":"McFarlin Place Apartments","units":[1,2],"address":"3421 Mcfarlin Blvd, Dallas, TX 75205","price":[1625,3175],"sqft":[874,1675],"history":[1800,1900,2000,2000,2000,2200,2200,2100,2100,2000,2000,1900],"predict":[1900,1900,1800,1700,1800,1800],"trend":true,"url":"https://www.apartments.com/mcfarlin-place-apartments-dallas-tx/kxg850b/","listings":"https://www.apartments.com/mcfarlin-place-apartments-dallas-tx/kxg850b/","desc":"We offer unique floor plan designs to accommodate your housing needs. Open concept kitchens, ceiling fans, washer/dryer connections and over sized living space makes McFarlin your ideal home. Close to campus, local shops and restaurants. This small community has only a few exclusive units available so call today to reserve your new home!"},
      {"id":4,"name":"Mockingbird Flats","units":[0,1,2],"address":"5600 Smu Blvd, Dallas, TX 75206","price":[1385,2735],"sqft":[494,1520],"history":[1500,1600,1600,1700,1700,1900,1800,1900,2000,2000,2100,2200],"predict":[2200,2200,2300,2400,2600,2500],"trend":false,"url":"https://www.mockingbirdflats.com/?utm_source=Apartments.com&utm_medium=ILS","listings":"https://www.mockingbirdflats.com/floor-plans","desc":"Mockingbird Flats is well connected to the Dallas scene you’re seeking. It’s both steps away from the campus of Southern Methodist University and the eclectic entertainment options within Downtown Dallas, particularly in University Park and Uptown. Not skipping a beat from this thriving community, Mockingbird Flats boasts studio, one, two, and three-bedroom apartment homes accented with sleek finishes and modern amenities."},
      {"id":5,"name":"The Katy","units":[1,2],"address":"4719 Cole Ave, Dallas, TX 75205","price":[2549,10725],"sqft":[657,2710],"history":[2500,2700,2800,2700,2700,2500,2600,2900,2800,2700,2600,2600],"predict":[2600,2500,2500,2500,2400,2500],"trend":true,"url":"https://thekaty.com/","listings":"https://thekaty.com/floorplans/","desc":"Welcome to The Katy, Dallas’ premier luxury apartment community. Our Katy Trail apartments are sure to meet and exceed the standards of even the most discerning prospective residents. Conveniently located in North Dallas, The Katy provides residents with modern elegance in an unbeatable location. Our community features luxurious one-, two-, and three-bedroom apartment homes, each offered in multiple floor plans. If you’re looking for breathtaking views and unparalleled prestige, we also have a penthouse floor plan option available."},
      {"id":6,"name":"The Armstrong at Knox","units":[1,2],"address":"4525 Cole Ave, Dallas, TX 75205","price":[2369,4759],"sqft":[750,1565],"history":[2400,2400,2600,2600,2500,2500,2600,2600,2500,2700,2700,2700],"predict":[2700,2700,2700,2800,2800,2900],"trend":false,"url":"https://thearmstrongatknox.com/","listings":"https://thearmstrongatknox.com/floorplans/","desc":"The Armstrong at Knox offers contemporary, boutique-style residences with stunning finishes and plenty of desirable upgrades. Surround yourself with enviable amenities such as a world-class fitness center and a resort style swimming pool that compliment your lifestyle needs. Experience a unique living environment with the best in shopping and dining at our ground-level retailers, and easy access to the Katy Trail."},
      {"id":7,"name":"Central Park","units":[1,2],"address":"8325 Meadow Rd, Dallas, TX 75231","price":[1470,2300],"sqft":[624,941],"history":[1500,1500,1600,1600,1700,1800,1700,1600,1800,1600,1500,1600],"predict":[1600,1600,1500,1500,1500,1400],"trend":true,"url":"https://www.centralparktx.com/","listings":"https://www.centralparktx.com/floorplans","desc":"Your new home at Central Park awaits you. Our apartment homes feature designer LED lighting package w/ hanging pendant lights in kitchens, contemporary style countertops in kitchens & bathrooms, fully-equipped kitchens w/ black appliances, app controlled smart home features which control your lights, door lock, and thermostat. Residents also enjoy our clubhouse w/ java bar, 24 hour fitness center, luxury style pool, and BBQ pavilion. Central Park is in an unbeatable location near North Central Expressway, right down the road from the shops at Park Lane."},
      {"id":8,"name":"Wildflower Apartments","units":[1,2],"address":"6031 Pineland Dr, Dallas, TX 75231","price":[745,905],"sqft":[508,1296],"history":[800,800,800,800,800,900,900,900,1000,1000,900,900],"predict":[900,900,800,800,800,800],"trend":true,"url":"https://www.smiwildflowerapts.com/","listings":"https://www.smiwildflowerapts.com/floorplans.aspx","desc":"Welcome To Wildflower Apartments. Relax and enjoy our beautiful landscaping and amenities that make everyday seem like a vacation. Our three sparkling pools will refresh you after a long day at work. Our unique floorplan designs offer you and your family a comfortable home."},
      {"id":9,"name":"The Heights at Park Lane","units":[1,2],"address":"8066 Park Ln, Dallas, TX 75231","price":[1776,5845],"sqft":[677,3248],"history":[2000,2100,2200,2400,2500,2500,2600,2700,2700,2700,2900,2800],"predict":[2800,2800,2900,3000,3100,3200],"trend":false,"url":"https://www.theheightsdallas.com/","listings":"https://www.theheightsdallas.com/floorplans","desc":"End your search for apartments in Preston Hollow, Dallas, TX, by visiting Heights at Park Lane. Our community offers you a wide selection of floor plans, from spacious yet intimate one-bedroom apartments to our large, family-sized three-bedroom residences. Each home has an open concept design with 9’-10’ ceilings giving you plenty of space, including catering kitchens, spa-inspired baths, and walk-in closets, giving you all the storage space you need. We also offer a wide range of resident amenities, including a wellness and fitness center with free weights and cardio equipment, 2 infinity edge pools, 2 large sundecks with lounge seating, all while keeping you close to great local dining, shopping, and entertainment. "},
      {"id":10,"name":"LaVita on Lovers Lane","units":[0,1,2],"address":"6603 E Lovers Ln, Dallas, TX 75214","price":[820,1475],"sqft":[480,760],"history":[900,900,1000,1000,1100,1200,1400,1400,1500,1300,1200,1200],"predict":[1200,1100,1100,1100,1000,900],"trend":true,"url":"https://www.lavitaonloversln.com/?utm_knock=a","listings":"https://www.lavitaonloversln.com/floorplans","desc":"At LaVita on Lovers Lane you have the benefit of the suburbs and the convenience of the city. Fifteen minutes to the heart of Dallas where you will find amazing museums, sports, concerts, shopping, and restaurants. Within minutes from home, you will find new shopping developments that include Aldi, Target, numerous stores and restaurants."},
      {"id":11,"name":"Pavilion Townplace","units":[1,2],"address":"7700 Greenway Blvd, Dallas, TX 75209","price":[1750,5900],"sqft":[748,2427],"history":[1800,1800,2000,2000,2100,2200,2400,2500,2400,2300,2100,2100],"predict":[2100,2100,2100,2000,2000,1900],"trend":true,"url":"https://willmax.net/pavilion-townplace.html","listings":"https://willmax.net/pavilion-townplace.html","desc":"Pavilion Townplace features 236 units in an unparalleled location just south of Lovers Lane and west of the Dallas North Tollway. Residents of Pavilion Townplace have easy access to Dallas Love Field Airport (1 mile west), downtown Dallas (3 miles south) and the abundant restaurants and retail stores located along Lovers Lane and Inwood Village (adjacent to the property). The high-end neighborhoods of Greenway Parks, University Park, Devonshire and Bluffview are all close by and provide great options for walks in the neighborhood… "},
      {"id":12,"name":"Modera Howell","units":[1,2],"address":"3400 Howell St, Dallas, TX 75204","price":[2086,5277],"sqft":[615,1551],"history":[2100,2100,2000,2200,2400,2600,2900,3000,3100,3200,2900,2600],"predict":[2700,2600,2500,2500,2400,2100],"trend":true,"url":"https://www.moderahowell.com/","listings":"https://www.moderahowell.com/dallas/modera-howell/conventional/","desc":"Close your eyes and picture your perfect day. Do you imagine curling up in a comfy lounge chair by a pool? Hopping on a vintage trolley to explore the quaintest part of town? Taking a jog through a lush park? Or do you fancy hitting up a hip, new cocktail lounge? Here at the one-of-a-kind Modera Howell, our uptown Dallas apartments, your perfect day can be every day. Ready to schedule your tour? Let's go!"},
      {"id":13,"name":"Lakewood on the Trail","units":[1,2],"address":"101 N Brookside Dr, Dallas, TX 75214","price":[1190,1821],"sqft":[470,1200],"history":[1200,1200,1400,1500,1300,1400,1500,1300,1400,1500,1600,1600],"predict":[1600,1600,1700,1900,2000,2100],"trend":false,"url":"https://www.lakewoodonthetrail.com/switch_cls[id]=65540/?utm_source=Apartments.com&utm_content=Listing","listings":"https://www.apartments.com/lakewood-on-the-trail-dallas-tx/qeq61kw/","desc":"Live in a new take on a Dallas, TX, classic at Lakewood on the Trail Apartments. Here, you’ll enjoy living in a sprawling home with access to resort-style amenities nestled in the prestigious Lakewood neighborhood, filled with lovely historic homes and towering trees just ten minutes from downtown."},
      {"id":14,"name":"Foxglove Apartments","units":[1,2],"address":"9450 Royal Ln, Dallas, TX 75243","price":[875,1300],"sqft":[525,1029],"history":[900,900,1000,1000,1100,1600,1400,1500,1300,1400,1300,1200],"predict":[1200,1200,1100,1100,1100,1000],"trend":true,"url":"https://www.apartments.com/foxglove-apartments-dallas-tx/0w8r372/","listings":"https://www.apartments.com/foxglove-apartments-dallas-tx/0w8r372/","desc":"Welcome home to Tides at Royal Lane South, ideally located in Dallas, TX. We’re just a short drive from the most desirable places for entertainment, dining, and shopping. There is an unrivaled selection of resort-style amenities such as our resort-style swimming pool, state of the art fitness center, dog park, and BBQ areas. Our uniquely designed community features modern and spacious one, two, and three-bedroom apartment homes. We offer fully remodeled units that include new flooring throughout, new stainless-steel appliances, new kitchen cabinets, quartz countertops, new paint, and an energy-efficient washer and dryer in select units. Call or stop by today for a tour! Our friendly leasing staff is waiting to assist you."},
      {"id":15,"name":"Cedar at the Branch","units":[1,2],"address":"4606 Amesbury Dr, Dallas, TX 75206","price":[1980,5260],"sqft":[572,1605],"history":[2000,2000,2100,2100,2200,2200,2300,2500,2400,2100,2200,2200],"predict":[2200,2200,2200,2100,2100,2000],"trend":true,"url":"https://liveatcedar.com/?utm_knock=a","listings":"https://liveatcedar.com/floorplans/","desc":"Cedar at The Branch Apartments is a community united by comfort. Our community was designed and built to fit any lifestyle. With studio, 1, 2, and 3 bedroom homes, we have no doubt you've found home. With quartz counters, hardwood floors, and uniquely designed built-in features, your decorating style will have no boundaries. Our spacious living spaces are perfect for entertaining guests or winding down."},
      {"id":16,"name":"The Village Dallas","units":[0,1,2],"address":"5605 Village Glen Dr, Dallas, TX 75206","price":[1210,5410],"sqft":[383,1818],"history":[1200,1400,1800,2000,2500,2400,2300,2100,2200,2000,2000,2000],"predict":[2000,2000,2000,1700,1600,1500],"trend":true,"url":"https://www.thevillagedallas.com/","listings":"https://www.thevillagedallas.com/home-finder/","desc":"Want to check out The Village perks and offerings? Join one of our group walking tours, where we will take you in and out of each Village experience and give you the opportunity to explore your future backyard. Just swing by to get in on the action. Group tours take about 30 minutes and are offered on the top of the hour, every hour from 10am-4:00pm. Monday- Saturday."},
      {"id":17,"name":"Luxia Midtown Park","units":[0,1,2],"address":"8107 Manderville Ln, Dallas, TX 75231","price":[1333,9741],"sqft":[513,1404],"history":[1400,1400,1500,1700,1700,1800,1900,1900,1900,2000,2100,2100],"predict":[2000,2000,2100,2100,2200,2300],"trend":false,"url":"https://www.luxiamidtownpark.com/?utm_knock=costar","listings":"https://www.luxiamidtownpark.com/floorplans","desc":"Elevated Dallas living, now leasing at Luxia Midtown Park. Designed with exquisite attention to detail, Luxia Midtown Park apartments in Dallas are elegantly sophisticated. Our studios, one and two-bedroom apartments are strikingly beautiful yet unpretentious, with granite countertops, modern cabinetry, spacious closets, and more. And, with a dazzling list of amenities, you will genuinely love spending your downtime here. Never miss a workout at the fitness studio, which features a separate yoga suite. Relax poolside on your days off, and socialize with friends and neighbors at Luxia Midtown Parks Clubhouse and SkyDeck. Visit today to discover your new North Dallas home."},
      {"id":18,"name":"Hue at Cityplace","units":[0,1,2],"address":"8107 Manderville Ln, Dallas, TX 75231","price":[1314,3625],"sqft":[500,1875],"history":[1400,1400,1400,1400,1400,1600,1600,1600,1600,1700,1700,1700],"predict":[1700,1700,1700,1700,1700,1800],"trend":false,"url":"https://hueatcityplaceapts.com/","listings":"https://hueatcityplaceapts.com/floorplans/","desc":"Welcome to Hue at Cityplace, a residential community featuring studio, one, two, & three-bedroom apartments in Dallas, TX. Spacious layouts and luxurious amenities welcome you home, along with exceptional service and an ideal location within walking distance to shopping, dining, and several entertainment options."},
      {"id":19,"name":"Alexan Lower Greenville","units":[0,1,2],"address":"5619 Belmont Ave, Dallas, TX 75206","price":[1810,4260],"sqft":[568,2255],"history":[1800,1800,1800,1900,1900,1900,2000,2100,2200,2400,2300,2100],"predict":[2100,2000,1800,1800,1800,1700],"trend":true,"url":"https://alexanlowergreenville.com/","listings":"https://alexanlowergreenville.com/floor-plans/","desc":"Introducing a new apartment community inspired by the craftsman-styled homes of the late 19th century. With its central location, unrivaled amenities and a short walk to one of the most buzz-worthy scenes in Dallas, look no further than Alexan Lower Greenville."}
    ]))
    // console.log(localStorage.getItem("apartments"))
    headroom.init();
  });
  return (
    <>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className="fixed-top" expand="lg" id="navbar-main" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand id="navbar-brand" to="/index" tag={Link}>
              SMU Apartment Finder
            </NavbarBrand>
            <UncontrolledTooltip placement="bottom" target="navbar-brand">
              SMU Apartment Finder
            </UncontrolledTooltip>
            <button
              className="navbar-toggler"
              id="navigation"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
                setCollapseOpen(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle color="default" caret nav>
                  More Info
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger" right>
                  <DropdownItem to="/index#LearnMore" tag={Link}>
                    <i className="nc-icon nc-alert-circle-i" />
                    Learn More
                  </DropdownItem>
                  <DropdownItem to="/about-us" tag={Link}>
                    <i className="nc-icon nc-app" />
                    About Us
                  </DropdownItem>
                  <DropdownItem to="/about-us#Contact" tag={Link}>
                    <i className="nc-icon nc-circle-10" />
                    Contact Us
                  </DropdownItem>
                </DropdownMenu> 
              </UncontrolledDropdown>
              <NavItem>
                <Button
                  className="btn-round"
                  color="success"
                  to="/search"
                  tag={Link}
                >
                  <i className="nc-icon nc-zoom-split" /> Search
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default WhiteNavbar;
