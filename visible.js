// 1- 50 porjontho shonka output dekaithe hbe
// rules-1     jodi shonkati 3 dia vag jai thahole print korbo foo
// rules-2 jodi sonkati 5 dia vag jai thahole print korbo bar
// rules-3 aber jodi sonkati 3 abong 5 ovoy sonka dia vag jai thahole print korbo "foobar"
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("foobar");
  } else if (i % 3 === 0) {
    console.log("foo");
  } else if (i % 5 === 0) {
    console.log("bar ");
  } else {
    console.log(i);
  }
}
