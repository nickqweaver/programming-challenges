// import { findLongestWord } from "./longestWord";

// const reallyLongWordThatMakesNoSense =
//   "aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnnooopppqqqrrrssstttuuuvvvwwwxxxyyyzzz";

// const reallyLongParagraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames ac turpis egestas. Nunc vel risus commodo viverra maecenas. Lorem ipsum dolor sit amet consectetur adipiscing. Vulputate mi sit amet mauris. Elementum eu facilisis sed odio morbi. Venenatis urna cursus eget nunc scelerisque viverra. Elementum sagittis vitae et leo duis ut diam quam nulla. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Vel fringilla est ullamcorper eget nulla. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Bibendum ut tristique et egestas. At urna condimentum mattis pellentesque id. Dictum at tempor commodo ullamcorper a lacus vestibulum. Aliquet bibendum enim facilisis gravida neque convallis a cras semper.
// Mattis enim ut tellus elementum. Ut diam quam nulla porttitor. Convallis tellus id interdum velit laoreet id. Euismod quis viverra nibh cras pulvinar mattis nunc. Varius vel pharetra vel turpis nunc eget. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Nunc faucibus a pellentesque sit amet. Diam ut venenatis tellus in metus vulputate. Facilisis magna etiam tempor orci. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. In pellentesque massa placerat duis ultricies lacus. Quisque id diam vel quam elementum pulvinar etiam non quam. Placerat vestibulum lectus mauris ultrices eros.
// Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Fermentum leo vel orci porta non pulvinar neque. Ornare aenean euismod elementum nisi quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Ullamcorper morbi tincidunt ornare massa eget egestas. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Volutpat ac tincidunt vitae semper quis. Nunc faucibus a pellentesque sit amet porttitor eget dolor. Amet mauris commodo quis imperdiet massa tincidunt. Dignissim convallis aenean et tortor at. Arcu felis bibendum ut tristique. Amet purus gravida quis blandit turpis cursus in hac habitasse. Odio facilisis mauris sit amet massa vitae. Eget sit amet tellus cras adipiscing.
// Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Eu facilisis sed odio morbi quis commodo odio aenean. Eget lorem dolor sed viverra ipsum nunc aliquet. Faucibus pulvinar elementum integer enim neque volutpat ac. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Sem fringilla ut morbi tincidunt augue. Nullam non nisi est sit amet facilisis. Lobortis scelerisque fermentum dui faucibus in ornare quam. Cras adipiscing enim eu turpis egestas pretium aenean. Lacus suspendisse faucibus interdum posuere. Pretium fusce id velit ut tortor. Fusce id velit ut tortor. Luctus accumsan tortor posuere ac ut consequat semper viverra. Sagittis eu volutpat odio facilisis mauris sit amet massa. Sit amet consectetur adipiscing elit. Quisque egestas diam in arcu cursus euismod quis.
// Orci sagittis eu volutpat odio facilisis mauris sit amet. Nec ullamcorper sit amet risus nullam eget felis eget. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Phasellus vestibulum lorem sed risus. Fames ac turpis egestas maecenas pharetra convallis. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Etiam dignissim diam quis enim lobortis. Proin sed libero enim sed faucibus turpis in. Tortor id aliquet lectus proin nibh nisl condimentum id. Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Lobortis scelerisque fermentum dui faucibus in. Est sit amet facilisis magna etiam. Egestas integer eget aliquet nibh praesent tristique magna. Ut sem nulla pharetra diam sit amet nisl suscipit. Sagittis id consectetur purus ut faucibus ${reallyLongWordThatMakesNoSense}`;

// test("It returns the correct word length", () => {
//   expect(findLongestWord("hello world how are you?")).toStrictEqual(5);
// });

// test("It returns the correct length with really long word", () => {
//   expect(
//     findLongestWord(
//       "What if we try a super-long word such as otorhinolaryngology"
//     )
//   ).toStrictEqual(19);
// });

// test("It can handle a really long paragraph", () => {
//   expect(findLongestWord(reallyLongParagraph)).toStrictEqual(
//     reallyLongWordThatMakesNoSense.length
//   );
// });

// test("It returns 0 when evaluating an empty string", () => {
//   expect(findLongestWord("")).toStrictEqual(0);
// });

// test("It does not evaluate white space as a word", () => {
//   expect(findLongestWord(" ")).toStrictEqual(0);
// });

// test("It does not evaluate a lot of white space as a word", () => {
//   expect(findLongestWord("                    ")).toStrictEqual(0);
// });
