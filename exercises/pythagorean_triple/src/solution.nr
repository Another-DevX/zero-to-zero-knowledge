fn main(a: Field, b: Field, c: pub Field)  {
    let result = a*a + b*b;
    assert(result == c*c);
}

#[test]
fn test_main() {
    main(3, 4, 5);
}
