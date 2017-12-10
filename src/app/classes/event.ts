import * as moment from 'moment';
export class EventClass {

	uid: any;
    external: boolean;
    title: string;
    desc: string;
    start_date: string;
    end_date: string;
    publish_date: string;
    publicity: any;
    monetary: any;
    notes: any;

    constructor() {
      this.uid = JSON.parse(localStorage.getItem('user')).uid;
      this.publish_date = moment().format('L');
      this.publicity = new EventClass.Publicity();
      this.monetary = new EventClass.Monetary();
    }

	static Publicity = class {
    poster: any;
    pub_num_posters: any;
    banner: any;
    infodesk: any;
    digboard: any;
    pub_start_date: string;
    pub_acad_blocks: any;
    pub_firstYear_blocks: any
    pub_nonFirstYear_blocks: any;
    pub_messes: any;
    pub_otherColleges: any;
    constructor() { }
  }

  static Monetary = class {
    mon_paid: boolean;
    mon_certi: boolean;
    mon_paid_member: any;
    mon_paid_non_member: any;
    mon_certi_member: any;
    mon_certi_non_member: any;
    mon_expected_expenditure: any;
    constructor() { }
  }

}