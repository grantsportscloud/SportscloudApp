import {Dimensions} from 'react-native';

export const base_url = 'https://nodeserver.mydevfactory.com:1447/';
export const IMAGE_URL = 'https://nodeserver.mydevfactory.com:1447/';

export const FONT = {
  SIZE: {
    SMALL: 14,
    MEDIUM: 16,
    LARGE: 18,
    BIG: 20,
    EXTRALARGE: 22,
  },
  FAMILY: {
    ROBOTO_BLACK: 'Roboto-Black',
    ROBOTO_BlackItalic: 'Roboto-BlackItalic',
    ROBOTO_Bold: 'Roboto-Bold',
    ROBOTO_BoldItalic: 'Roboto-BoldItalic',
    ROBOTO_Italic: 'Roboto-Italic',
    ROBOTO_Light: 'Roboto-Light',
    ROBOTO_LightItalic: 'Roboto-LightItalic',
    ROBOTO_Medium: 'Roboto-Medium',
    ROBOTO_MediumItalic: 'Roboto-MediumItalic',
    ROBOTO_Regular: 'Roboto-Regular',
    ROBOTO_Thin: 'Roboto-Thin',
    ROBOTO_ThinItalic: 'Roboto-ThinItalic',
  },
};

export const HEIGHT = Dimensions.get('window').height;
export const WIDTH = Dimensions.get('window').width;

export const COLORS = {
  BACKGROUNDCOLOR: '#ffffff',
  LOGOCOLOR: '#3F3C3C',
  PRIMARY: '#1d1d1e',
  SECONDARY: '#FF5721',
  WHITE: '#ffffff',
  GRAY: 'gray',
  TRANSPARENT: 'transparent',
  ICONBACKGROUND: "#403f3c",
  HEADERCOLOR: "#313131",
  STATUSBARCOLOR: "#1d1d1e",
  BOARDERCOLOR: '#3F3C3C',
  APPCOLORS: '#262626',
  TEXTCOLORS: '#A8A8A8',
  TEXTINPUTBACKCOLOR: '#F4F3F6',
  ACTIVECOLORS:"#EC3525",
  GREENCOLOR:"#1FD83C",
  PURPLECOLOR:"#963687",
  REDCOLOR:"#EC3525"
};

export const GAP = {
  SMALL: 10,
  MEDIUM: 20,
  LARGE: 30,
};

export const PLACE_TYPE = {
  PARK: 'amusement_park',
  ART_GALLERY: 'art_gallery',
  MUSEUM: 'museum',
  ATTRACTION: 'tourist_attraction',
  RESTAURANT: 'restaurant'
}

