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

- [getResponsiveImageData](#getResponsiveImageData)
- [getVideoUrl](#getVideoUrl)
- [getVideoId](#getVideoId)
- [getTitle](#getTitle)
- [getText](#getText)

### <a name="getResponsiveImageData"></a>getResponsiveImageData

Get an array of random IFakeImage objects.

```tsx
getResponsiveImageData(pRatio, pBreakpoints);
```

#### Parameters

- `pRatio (number)`: Image ratio - default: `4 / 3`
- `pBreakpoints (number[])`: Breakpoints list - default: `[640, 1024, 1440, 1920]`

#### Returns

`(Array) IFakeImage[]`: Array of IFakeImage data object

#### Example

```tsx
// will returned an array of IFakeImage object with 16/9 ratio
const responsiveImageData = Fake.getResponsiveImageData(16 / 9);
```

### <a name="getVideoUrl"></a>getVideoUrl

Get a random video URL.

```tsx
getVideoUrl(pFakeVideoType, pYoutubeId, pVimeoId);
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
const youtubeUrl = Fake.getVideoUrl(EVideoType.YOUTUBE);
```

### <a name="getVideoId"></a>getVideoId

Get a random video ID.

```tsx
getVideoId(pFakeVideoType);
```

#### Parameters

- `pFakeVideoType (EVideoType<YOUTUBE|VIMEO>)`: Type of video

#### Returns

`(string)`: video ID

#### Example

```tsx
// will returned a random vimeo id
const vimeoUrl = Fake.getVideoId(EVideoType.VIMEO);
```

### <a name="getTitle"></a>getTitle

Get a random title.

```tsx
getTitle(pWords);
```

#### Parameters

- `pWords (number)`: Number of words - default: `1`

#### Returns

`(string)`: title

#### Example

```tsx
// will returned two random words
const title = Fake.getTitle(2);
```

### <a name="getText"></a>getText

Get random text.

```tsx
getText(pSentencies);
```

#### Parameters

- `pSentencies (number)`: Number of sentencies - default: `1`

#### Returns

`(string)`: text

#### Example

```tsx
// will returned four random sentencies
const text = Fake.getText(4);
```
