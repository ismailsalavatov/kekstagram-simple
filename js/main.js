import {getRandomPositiveInteger} from './utils.js';
import {getRandomArrayElement,  createMessage, creatComment, createPhoto, getPhotos} from './object-creator.js';

const PHOTOS_COUNT = 25;
const AVATARS_COUNT = 6;
const COMMENTS_COUNT = getRandomPositiveInteger(1, 10);

const LikesCount = {
  MIN: 15,
  MAX: 200,
};

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Пространное описание',
  'Смешное описание',
  'Описание - стихотворение',
  'Грустное описание',
  'Загадочное описание',
  'Краткое описание',
  'Описание - цитата',
  'Рекламное описание',
  'Девятое описание',
];

const NICKNAMES = [
  'Бэтмен',
  'Человек-паук',
  'Женщина-кошка',
  'Чудо-женщина',
  'Робин',
  'Альфред',
];

createMessage();
creatComment();
createPhoto();
getPhotos();
