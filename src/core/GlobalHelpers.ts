import { FromElement } from "./shared/cs-form/cs-form.component";

export class GlobalHelpers {

  static Clone(_model: any = {}) {
    return JSON.parse(JSON.stringify(_model));
  }

  static GenerateGuId(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  private static monthsMap: Record<string, number> = {
    JAN:0,FEB:1,MAR:2,APR:3,MAY:4,JUN:5,
    JUL:6,AUG:7,SEP:8,OCT:9,NOV:10,DEC:11
  };

  static toDate(value: string | Date | null): Date | null {
    if (!value) return null;

    if (value instanceof Date) return value;

    const str = value.toString().trim().toUpperCase();

    // SQL datetime 'YYYY-MM-DD HH:mm:ss' or 'YYYY-MM-DD'
    if (/\d{4}-\d{2}-\d{2}/.test(str)) {
      const d = new Date(str.replace(' ', 'T'));
      return isNaN(d.getTime()) ? null : d;
    }

    // DD/MMM/YYYY or DD-MMM-YYYY or DD/MM/YYYY
    let parts: string[] = [];
    if (str.includes('/')) parts = str.split('/');
    else if (str.includes('-')) parts = str.split('-');

    if (parts.length === 3) {
      const day = parseInt(parts[0]);
      const month = isNaN(parseInt(parts[1])) 
        ? (this.monthsMap[parts[1]] ?? 0) 
        : parseInt(parts[1]) - 1;
      const year = parseInt(parts[2]);

      if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
        return new Date(year, month, day);
      }
    }

    // fallback
    const d = new Date(str);
    return isNaN(d.getTime()) ? null : d;
  }

  static setDate(value: string | Date | null): string | null {
    const date = this.toDate(value);
    if (!date) return null;

    const yyyy = date.getFullYear();
    const mm = (date.getMonth() + 1).toString().padStart(2,'0');
    const dd = date.getDate().toString().padStart(2,'0');
    const hh = date.getHours().toString().padStart(2,'0');
    const min = date.getMinutes().toString().padStart(2,'0');
    const ss = date.getSeconds().toString().padStart(2,'0');

    return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
  }

  static formatDisplay(dateValue: string | Date | null): string {
    const date = this.toDate(dateValue);
    if (!date) return '';

    const day = date.getDate().toString().padStart(2,'0');
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }

  static ValidateModel(elements: FromElement[], model: any){
    if(elements?.length === 0) return;
    let errorLst: any[] = [];
    elements.forEach((x: FromElement) => {
      if(x.required && !model[x.key]) errorLst.push(`${x.label} Is Required!`);
    });
    return errorLst;
  }

}