import request from "supertest";
const jwtMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

describe("testando o read", () => {
  beforeEach(() => {
    console.log("antes de cada teste");
  });

  it("should return a message unauthorized", async () => {
    const response = await request("http://localhost:3777", {})
      .get("/home")
      .send();
    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      message: "Unauthorized",
    });
  });

  it("should return a array with items", async () => {
    const response = await request("http://localhost:3777", {})
      .get("/home")
      .set("authorization", `Bearer ${jwtMock}`)
      .send();
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        {
          id: 1,
          name: "example",
          email: "lucas.camachofilho@gmail.com",
          gender: "MASCULINO",
          age: 25,
        },
      ]),
    );
  });
  it("should return a item by id", async () => {
    const id = 1;
    const response = await request("http://localhost:3777", {})
      .get("/home/" + id)
      .set("authorization", `Bearer ${jwtMock}`)
      .send();
    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      {
        id,
        name: "example",
        email: "lucas.camachofilho@gmail.com",
        gender: "MASCULINO",
        age: 25,
      },
    ]);
  });
  it("should return a erro id is required", async () => {
    const response = await request("http://localhost:3777", {})
      .get("/home/")
      .set("authorization", `Bearer ${jwtMock}`)
      .send();
    expect(response.status).toBe(400);
  });
});
