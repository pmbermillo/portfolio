<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import HelloWorld from '../components/HelloWorld.vue'
const scroll = (refName) => {
  const element = document.getElementById(refName);
  element.scrollIntoView({behavior: "smooth"});
}
// defineProps({
//   isHovering: {
//     type: array,
//     item: [
//       {
//         img: "13.jpg",
//       },
//       {
//         img: "13.jpg",
//       },
//       {
//         img: "13.jpg",
//       },
//       {
//         img: "13.jpg",
//       },
//     ]
//   }
// })
// const isHovering=ref([
//   {
//     img: "13.jpg",
//   },
//   {
//     img: "13.jpg",
//   },
//   {
//     img: "13.jpg",
//   },
//   {
//     img: "13.jpg",
//   },
// ])
</script>

<template>
  <v-app id="home">
    <TheWelcome /> 
    <v-container fluid>
      <div class="head">
          <v-row>
            <v-col cols="5">
              <div style="position:relative" class="mt-16">
                <h1 class="text-grey">Hello</h1>
                <h1 class="text-white">I'm Princess Mae Saban</h1>
                <span class="text-grey">Software Developer</span><br/>
                <v-btn tile dark class="text-yellow mt-8" variant="outlined" @click="scroll('contact')">Contact me</v-btn>
              </div>
            </v-col>
            <v-col cols="2">
              <div style="position:absolute; z-index:9999; bottom:0; margin-left:auto; margin-right:auto;left:0;right:0;text-align:center">
                <v-icon>fas fa-angle-double-down</v-icon>
              </div>
            </v-col>
            <v-col cols="5">
              <div style="position:relative; z-index:9999;" class="mt-16">
                <v-img src="cess.jpg" contain max-height="300"></v-img>
              </div>
            </v-col>
          </v-row>
      </div>
      <v-col cols="12" class="mt-16" id="about">
        <div>
          <v-row>
            <v-col cols="12" sm="6">
              <div class="egg">
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <h3 class="mt-16">About me</h3>
              <div style="width:120px">
                <v-slider v-model="slider2" color="yellow" >
                </v-slider>
              </div>
              <h4>I am a creative Web Developer</h4>
              <p class="text-grey">"Passionate about the world of digital innovation and user-centric technology, driven by creativity and innovation. With a solid foundation in software development, I push boundaries and embrace new challenges. My journey blends diverse experiences, from experimenting with coding languages during my formative years to collaborating on intricate web projects with multidisciplinary teams. Collaborative and goal-oriented.</p><br/>
              <p class="text-grey"> I believe in teamwork's power to bring ideas to life. From optimizing website accessibility to creating intuitive user interfaces, I'm committed to making a positive impact in the web development field. Thanks for visiting – excited to share my creative journey!"</p>
              <v-btn tile dark color="yellow">Download Resume
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <div class="text-center mt-10">
        <h5>more about me</h5>
        <div style="width:120px; margin: 0 auto">
          <v-slider v-model="slider2" color="yellow" >
          </v-slider>
        </div>
      </div>
      <v-col cols="12" class="padd" id="skills">
        <div class="first" id="project">
          <v-row>
            <v-col cols="12">
              <div class="child">
                <v-btn icon="fas fa-map-marker-alt" color="#FBDF7E" class="text-white"></v-btn>
                <h3 class="ml-3 mt-4">Address</h3>
                <p class="text-grey ml-3 mt-4 text-caption">
                  Garden Villas 3 P2,<br/>Sta. Rosa Laguna, PH. 4026
                </p>
              </div>
              <div class="child">
                <v-btn icon="fas fa-book" color="#FBDF7E" class="text-white"></v-btn>
                <h3 class="ml-3 mt-4">Educational Attainment</h3>
                <p class="text-grey ml-3 mt-4 text-caption">
                  Bachelor of Science in <br/>Information Technology
                </p>
              </div>
              <div class="child">
                <v-btn icon="fas fa-heart" color="#FBDF7E" class="text-white"></v-btn>
                <h3 class="ml-3 mt-4">Hobbies</h3>
                <p class="text-grey ml-3 mt-4 text-caption">
                  Travel<br/>
                  Anime
                </p>
              </div>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </div>
      </v-col>
      <v-col cols="12" sm="12" id="skills">
        <h3 class="text-center">Skills that set me apart</h3><br/>
        <div class="d-flex justify-center mb-6">
          <v-btn color="#FBDF7E" class="mr-2">
            All
          </v-btn>
          <v-btn class="mr-2" variant="tonal">
            Web Coding
          </v-btn>
           <v-btn variant="tonal">
            Web Design
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" class="imgHover">
        <v-row class="fill-height" align="center" justify="center">
          <v-img src="ms.png" contain max-height="200"></v-img>
          <v-img src="html.jpg" contain max-height="200"></v-img>
          <v-img src="css.png" contain max-height="200"></v-img>
          <v-img src="java.png" contain max-height="200"></v-img>
          <v-img src="posgre.jpg" contain max-height="200"></v-img>
        </v-row>
        <v-row>
          <v-img src="c.png" contain max-height="200"></v-img>
          <v-img src="vb.png" contain max-height="200"></v-img>
          <v-img src="php.png" contain max-height="200"></v-img>
          <v-img src="js.jpg" contain max-height="100"></v-img>
          <v-img src="mysql.png" contain max-height="200"></v-img>
          <!-- <template v-for="(item, i) in items" :key="i">
            <v-col cols="12" md="4">
              <v-hover v-slot="{isHovering, props}">
              </v-hover>
                <v-card :elevation="isHovering?12:2" :class="{'on-hover': isHovering}" v-bind="props">
                  <v-img :src="item.img" height="225px" cover></v-img>
                </v-card>
            </v-col>
          </template> -->
        </v-row>
        <v-row class="fill-height" align="center" justify="center">
          <v-img src="vue.png" contain max-height="200"></v-img>
          <v-img src="laravel.png" contain max-height="200"></v-img>
          <v-img src="mvc.jpg" contain max-height="200"></v-img>
          <v-img src="rpa.png" contain max-height="200"></v-img>
          <v-img src="ps.png" contain max-height="50"></v-img>
        </v-row>
      </v-col>
      <!-- <v-col cols="12">
        <div class="d-flex justify:center mb-6">
          <v-btn color="#FBDF7E" class="mt-4">Load more</v-btn>
        </div>
      </v-col> -->
      <v-col cols="12" id="exp">
        <div class="pre">
          <v-row>
            <v-col cols="12" sm="12">
              <v-card class="mw-auto" width="100%" max-height="">
                <v-card-title>Software Developer</v-card-title>
                <v-card-subtitle>
                  Peak Outsourcing 2021-12 to present
                </v-card-subtitle>
                <v-card-text>
                  FullStack Developer<br/>
                  Deploy projects in web hosting such as HostGator, NameCheap<br/>
                  Use Vue.Js and Laravel for Framework<br/>
                  Use MySQL, PHPMyAdmin for DB
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="12">
              <v-card class="mw-auto" width="100%" max-height="">
                <v-card-title>FullStack Developer</v-card-title>
                <v-card-subtitle>
                  Fujitsu Die Tech Corp. of the Philippines 2018-2021
                </v-card-subtitle>
                <v-card-text>
                  FullStack Developer/Software Engineer<br/>
                  Provide support for safety, quality, planning, and throughout improvement<br/>
                  Work in a Team<br/>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="12">
              <v-card class="mw-auto" width="100%" max-height="">
                <v-card-title>Production Engineer / Asst. </v-card-title>
                <v-card-subtitle>
                  Fujitsu Die Tech Corp. of the Philippines 2014-2018
                </v-card-subtitle>
                <v-card-text>
                  Create Reports for Engr. request, examination, packaging procedure,<br/>
                  trouble investigation, and work specification<br/>
                  Investigate trouble detected on ATM BRU Unit<br/>
                  Kaizen symposium committee<br/>
                  Jig Request, Design, and issuance<br/>
                  Control, Monitor, Invetory Issue Class C IMTEs<br/>
                  Tack Time gathering for jig and process improvement application<br/>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="12">
              <v-card class="mw-auto" width="100%" max-height="">
                <v-card-title>Logistic Staff</v-card-title>
                <v-card-subtitle>
                  Karzai Inc. 2013-2014
                </v-card-subtitle>
                <v-card-text>
                  Provide delivery schedule every week for planning<br/>
                  Provide all documents needed in the delivery<br/> 
                  Update documents
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12" id="blog">
        <div class="hire">
          <v-row>
            <v-col cols="12" sm="8">
              <h1 class="mt-9">Hire me for your awesome project</h1>
              <!-- <p class="text-grey">
                Message
              </p> -->
            </v-col>
            <v-col cols="12" sm="4">
              <v-btn color="#FBDF7E" class="mt-15" @click="scroll('contact')">Hire me</v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12" sm="12" class="px-16" id="contact">
        <v-row>
          <v-col cols="12" sm="4">
            <div class="child">
              <h1>Contact Information</h1>
              <v-btn icon="fas fa-phone-alt" class="mt-10" variant="outlined"></v-btn><br/>
              <span class="text-caption">+639972300761</span><br/>
              <v-btn icon="fas fa-envelope" class="mt-10" variant="outlined"></v-btn><br/>
              <span class="text-caption">pm.bermillo29@gmail.com</span><br/>
            </div>
          </v-col>
          <v-col cols="12" sm="8">
            <h1 class="mt-8">Send me your message</h1>
            <v-divider></v-divider>
            <span class="text-caption">Sorry, but this form is not yet working. Please use my contact information to contact me. Thank you.</span>
            <v-row class="mt-10">
              <v-col cols="12" sm="6">
                <v-text-field label="Name" persistent-hint variant="outlined">
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="Phone Number" persistent-hint variant="outlined">
                </v-text-field>
              </v-col>
            </v-row>
            <v-textarea label="Message" persistent-hint variant="outlined">
            </v-textarea>
            <v-btn color="#FBDF7E" class="mt-2">Submit now</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
    <HelloWorld/>
  </v-app>
  <!-- <row>
    <div class="wrapper">
      <HelloWorld msg="Princess Mae Bermillo Saban" /><br>
      <img alt="Vue logo" class="logo" src="@/assets/cess.jpg" width="300" height="250" />
    </div>
  </row> -->
  <!-- <main>
    <TheWelcome />
  </main> -->
</template>

<style scoped>
  /* .wrapper {
  align-items: center;
  justify-content: center;
  display: flex;
  }
  .logo {
  display: block;
  margin: 0 auto 2rem;
  margin-top: 50px;
  } */
  .v-container {
    padding: 16px, 0;
  }
  .head {
    position: relative;
    text-align: center;
    padding: 12px;
    margin-bottom: 6px;
    height: 400px;
    width: 100%;
    color: white;
  }
  .head:before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    background: black;
    transform: skew(0deg,6deg);
  }
  .head:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
    background: black;
    transform: skew(0deg,-6deg);
  }
  .egg{
    display:block;
    margin-left:100px;
    margin-top:50px;
    width:356px;
    height:300px;
    background-color:#FBDF7B;
    border-radius:50% 50% 50% 50% / 60% 60% 40% 0%;
  }
  .first{
    width: 100%;
    height: 280px;
    text-align: center;
    padding: 2rem 2rem
  }
  .child{
    display:inline-block;
    padding: 2rem 1rem;
    vertical-align: middle;
    text-align: center;
    margin-right: 8px;
  }
  .imgHover{
    padding: 0 200px;
  }
  .pre{
    width:100%;
    height: 800px;
    text-align:center;
    padding: 0 200px;
    background-color: #f5f5f5;
  }
  .hire{
    width:100%;
    height: 200px;
    padding: 0 200px;
    background-color: #e9e9e9;
    margin-top: -24px;

  }
</style>
