class Student {
    #g1;
    #g2;
    #g3;
    #attendance;
    
    constructor(name, g1, g2, g3, attendance) {
        this.name = name;
        this.g1 = g1;
        this.g2 = g2;
        this.g3 = g3;
        this.attendance = attendance;
    }
    
    set g1(v) {
        if (v === "" || isNaN(v) || v < 0 || v > 100)
            throw new Error("Grade 1 must be 0-100");
        this.#g1 = Number(v);
    }
   
    set g2(v) {
        if (v === "" || isNaN(v) || v < 0 || v > 100)
          throw new Error("Grade 2 must be 0-100");
        this.#g2 = Number(v);
      }
        
    set g3(v) {
        if (v === ""|| isNaN(v) || v < 0 || v> 100);
            throw new Error("Grade 3 must be 0-100");
        this.#g3 = Number(v);
    }
    
    set attendance(v) {
        if (v === "" || isNaN(v) || v <0 || v > 100)
            throw new Error("Attendance must be 0-100");
        this.#attendance = Number(v);
    }
    
    get average() {
        return (this.#g1 + this.#g2 + this.#g3) / 3;
    }       