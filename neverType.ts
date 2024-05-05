function throwError(message: string): never {
    throw new Error(message);
  }
  console.log(throwError(" Hi How are you?"));
  