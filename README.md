# Long short story

- [Plantifi](#Plantifi)
- [Technologies](#Technologies)
- [Web Plants ID](#WebPlantID)
- [Summary](#Summary)

## Plantifi

<a style="display: inline-block;background: black; border-radius: 20px; width: 100px; text-align: center;color: white; padding: 5px" href="https://play.google.com/store/apps/details?id=com.szymon1993.plantifi">Google app</a>   

<a style="display: inline-block;background: black; border-radius: 20px; width: 100px; text-align: center;color: white; padding: 5px" href="https://www.figma.com/file/9Mjrr6WzPrrUpFpVoT0SNq/Plantifi?node-id=0-1&t=b2rb92xPwhcN4cWv-0">Figma</a>

![plantifi](https://github.com/SzymonGonerko/Plantifi/blob/bafb9d30afeaa4d69c82c6784f1c865eaf09f114/assets/preview/1.png)
Plantifi is app to manage your home plants. The app contains a small database of popular houseplants. Moreover, it can recognize plants by returning name, description plant.

Plantifi was created with the involvement of the UX team and my work as a frontend developer. Klaudia Ginter, acting as the Lead UX, showed me all the assumptions of the application. Many of them have been successfully inclouded into the project.

A large part of team believes that with the investor's support we will be able to implement such functionalities as:
- user authentication;
- swipe navigation;
- plant health;

## Technologies

The application was written mainly using the React Native library. To support native functionalities such as; camera, photo library, notifications, device memory were used EXPO library API. The application was compiled on the EXPO server side in two formats *.apk and *.aab

Further work on the app will allow to create of craft classes tailored to the needs of the project purpose.

## WebPlantID

![Web Plant ID](https://github.com/SzymonGonerko/Plantifi/blob/bafb9d30afeaa4d69c82c6784f1c865eaf09f114/assets/preview/2.jpg)

One of the key functionalities of Plantifi is the recognition of home plants. This functionality is provided by  FlowerChecker s.r.o. Hrnciřská 813/23 Brno Czech Republic.
FlowerChecker in Plantifi allows you to identify a plant by indicating its name, classification, photo, description and species. Plant recognition is based on a photo taken by the user and then sent in base64 format to the server. FlowerChecker indicates that the recognition of the plant is ensured by machine learning and therefore the indication of the plant may be subject to error. Plantifi only indicates plants whose recognition accuracy is greater than 35%;
```
if ((data.suggestions[0]?.probability).toFixed(2) * 100 > 35) {…}
```

This avoids incorrect indication of a different or similar plant. In addition to plant recognition services, it is also possible to diagnose plant diseases

<a href="https://www.youtube.com/watch?v=YBdMS83SOm4&ab_channel=Plant%C2%B7id">Web Plants on YouTube</a>

## Summary

Plantifi is currently an overview application with plant recognition functionality. Its maintenance costs are covered by team members. However, in order for Plantifi to include the functionality of the utility application, an investor is needed who will provide funds and tools for its further development...




