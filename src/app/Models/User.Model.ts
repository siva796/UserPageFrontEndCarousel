
	export class UserModel
    {
     
      userId:number;
      userName: string;
      email: string;
      constructor(Uname?, Uemail?,Uid?) {
        this.userName = Uname;
        this.email = Uemail;
        this.userId=Uid;
      }

	  }