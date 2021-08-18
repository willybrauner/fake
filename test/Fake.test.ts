import { Fake, EFakeVideoType } from "../src";

describe("FakeDataUtils", () => {
  it("should be defined", () => {
    expect(Fake).toBeDefined();
  });

  describe("responsiveImageData", () => {
    it("should be defined", () => {
      expect(Fake.responsiveImageData).toBeDefined();
    });
    it("should return an array of IImage objects", () => {
      const thumbs = Fake.responsiveImageData();
      expect(thumbs).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            url: expect.any(String),
            width: expect.any(Number),
            height: expect.any(Number),
          }),
        ])
      );
    });
  });

  describe("videoId", () => {
    it("should return a string", () => {
      const youtubeId = Fake.videoId(EFakeVideoType.YOUTUBE);
      const vimeoId = Fake.videoId(EFakeVideoType.VIMEO);
      [youtubeId, vimeoId].forEach((el) => {
        expect(typeof el).toBe("string");
      });
    });
  });

  describe("videoUrl", () => {
    it("should be defined", () => {
      expect(Fake.videoUrl).toBeDefined();
    });
    it("should return a string", () => {
      const youtubeUrl = Fake.videoUrl(EFakeVideoType.YOUTUBE);
      const vimeoUrl = Fake.videoUrl(EFakeVideoType.VIMEO);
      const nativeUrl = Fake.videoUrl(EFakeVideoType.NATIVE);
      [youtubeUrl, vimeoUrl, nativeUrl].forEach((el) => {
        expect(typeof el).toBe("string");
      });
    });
  });

  describe("title", () => {
    it("should be defined", () => {
      expect(Fake.title).toBeDefined();
    });
    it("should return a string", () => {
      expect(typeof Fake.title()).toBe("string");
    });
  });

  describe("text", () => {
    it("should be defined", () => {
      expect(Fake.text).toBeDefined();
    });
    it("should return a string", () => {
      expect(typeof Fake.text()).toBe("string");
    });
  });
});
