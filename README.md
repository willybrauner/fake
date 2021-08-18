# @wbe/fake

Generate fake data image/text/video allowing to test UI components

![](https://img.shields.io/npm/v/@wbe/fake/latest.svg)
![](https://img.shields.io/bundlephobia/minzip/@wbe/fake.svg)
![](https://img.shields.io/david/willybrauner/libraries.svg?path=packages%2Futils%2Ffake)
![](https://img.shields.io/npm/dt/@wbe/fake.svg)
![](https://img.shields.io/npm/l/@wbe/fake.svg)

## Installation

```shell script
$ npm install -s @wbe/fake
```

## How to use

Import `fakeDataUtils`:

```tsx
import { fakeDataUtils } from "@wbe/fake";
```

## API

- [responsiveImageData](#responsiveImageData)
- [videoUrl](#videoUrl)
- [videoId](#videoId)
- [title](#title)
- [text](#text)

### <a name="responsiveImageData"></a>responsiveImageData

Get an array of random IFakeImage objects.

```tsx
responsiveImageData(pRatio, pBreakpoints);
```

#### Parameters

- `pRatio (number)`: Image ratio - default: `4 / 3`
- `pBreakpoints (number[])`: Breakpoints list - default: `[640, 1024, 1440, 1920]`

#### Returns

`(Array) IFakeImage[]`: Array of IFakeImage data object

#### Example

```tsx
// will returned an array of IFakeImage object with 16/9 ratio
const responsiveImageData = Fake.responsiveImageData(16 / 9);
```

### <a name="videoUrl"></a>videoUrl

Get a random video URL.

```tsx
videoUrl(pFakeVideoType, pYoutubeId, pVimeoId);
```

#### Parameters

- `pFakeVideoType (EVideoType<YOUTUBE|VIMEO|NATIVE>)`: Type of video
- `pYoutubeId (string)`: Specify youtube ID to use - default: random ID
- `pVimeoId (string)`: Specify vimeo ID to use - default: random ID

#### Returns

`(string)`: video URL

#### Example

```tsx
// will returned a random youtube url
const youtubeUrl = Fake.videoUrl(EVideoType.YOUTUBE);
```

### <a name="videoId"></a>videoId

Get a random video ID.

```tsx
videoId(pFakeVideoType);
```

#### Parameters

- `pFakeVideoType (EVideoType<YOUTUBE|VIMEO>)`: Type of video

#### Returns

`(string)`: video ID

#### Example

```tsx
// will returned a random vimeo id
const vimeoUrl = Fake.videoId(EVideoType.VIMEO);
```

### <a name="title"></a>title

Get a random title.

```tsx
title(pWords);
```

#### Parameters

- `pWords (number)`: Number of words - default: `1`

#### Returns

`(string)`: title

#### Example

```tsx
// will returned two random words
const title = Fake.title(2);
```

### <a name="text"></a>text

Get random text.

```tsx
text(pSentencies);
```

#### Parameters

- `pSentencies (number)`: Number of sentencies - default: `1`

#### Returns

`(string)`: text

#### Example

```tsx
// will returned four random sentencies
const text = Fake.text(4);
```
