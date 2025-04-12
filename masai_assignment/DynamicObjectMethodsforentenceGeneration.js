
  // L2 - Dynamic Object Methods for Sentence Generation
  
  
  
  let sentenceBuilder = {

    subject: "I",
    verb: "am",
    object: "coding",
    
    
    buildSentence: function() {
      let str = ""
  
      str = str + this.subject + " "
      str = str + this.verb    + " "
      str = str + this.object  + " "
      
      if(str){
        return str;
      }
      else{
        return "Incomplete sentence";
      }
     
    },
    
    updateProperty: function(property , value) {
      if (property === "subject") {
         this.subject = value;
      } else if (property === "verb") {
        this.verb = value;
      } else if (property === "object") {
      this.object = value;
      } else {
        return "Invalid property";
     }
   }
};

  
  console.log(sentenceBuilder.buildSentence());

  sentenceBuilder.updateProperty("verb", "am learning");
  console.log(sentenceBuilder.buildSentence());
  
  sentenceBuilder.updateProperty("subject", "The cat");
  console.log(sentenceBuilder.buildSentence());

  console.log(sentenceBuilder.updateProperty("mood", "happy"));

  sentenceBuilder.updateProperty("verb", "");
  console.log(sentenceBuilder.buildSentence());


