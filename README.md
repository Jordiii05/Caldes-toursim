This is a tourism web page for Caldes

WIREFRAME

  Header
  
    Short and visual section, name and coat of arms of the village.
  Intro
  
    . An introductory text.
    . A video recorded with a drone showing the village.
    . A map of the municipality, which helps tourists to locate themselves and includes routes to walk and enjoy nature.
  Main
  
    Component in charge of organizing and connecting the main sections of the page.
  Activities
  
    5 activities have been included. Each activity contains: Identifier (id) Name, Brief description,Price and a multimedia element (image or audio) to illustrate the activity.
  Cart
  
    Show all activities added to the cart and allow:
      ' Add or remove amount of an activity with (+ / ') buttons.
      . Delete a specific activity.
      . Empty the whole basket.
      . Display the total (.) of the order.
  Footer
  
    Contact section for more information. 
      Includes:
        Telephone (incomplete for privacy reasons, since the website will be published on GitHub).
        Address (no specific number for the same reason).
        Copyright.

DESCRIPTION OF MULTIMEDIA ELEMENTS AND PAGE DESIGN

Requirements required at least one video, one audio, and one edited photo.
All media elements (images, video and audio) are in the public/multimedia/ folder.
  
Edited photo: The image used in the Vichy Catalan activity has been edited with GIMP. To make this clear, the file carries “gimp” to the name.

  Video: a drone-engraved video showing the village has been included. It is useful for the user because it gives a global vision of the 
  municipality in a more intuitive way than seeing only photos or Google Maps.

  Audio: The activity of the book “El fill de l’Italià” has included an audio of the author where he describes the book and how the story arose in Caldes de Malavella.
  This content can help the user decide if they are interested in buying it.

I have decided that each activity has a multimedia element (image or audio) in addition 
to the description, so that the page is more visual and attractive.

CSS STYLE

For the design, I have maintained a simple and clear aesthetic, using very soft blue tones. 
Caldes is a thermal village and water is an important element of the municipality, 
so I have chosen a palette that represents this idea (blue and degraded).

The page is separated into sections to facilitate navigation and reading. 
6 main components have been created to maintain an orderly structure:
Header, Intro, Main, Activities, Cart, Footer.

INSTRUCCTIONS TO RUN THE WEBSITE

You need to have Node.js and npm instaled.
Steps
  Open the folder in the terminal.
  Install dependences. (npm install)
  Start the server (npm start)
  Open the browser and enter (http://localhost:3000 or the port you have)

LAST CONSIDERATIONS

This technical was written by me in my native language Catalan, and translated to English using https://www.softcatala.org/traductor/ 
