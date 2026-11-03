
export interface iempArr {
 empId: number;
 empName: string;
 designation: string;
 department: string;
 salary: number;
 isPermanent: boolean;
 email: string;
 contact: number;
}[]

export interface istudentArr {
 rollNo: number;
 name: string;
 course: string;
 year: string;
 percentage: number;
 isPassed: boolean;
 email: string;
 contact: number;
}[]


export interface iproductArr {
 prodId: number;
 prodName: string;
 category: string;
 price: number;
 stock: number;
 isAvailable: boolean;
 brand: string;
}[]

export interface icourseArr {
 courseId: number;
 courseName: string;
 duration: string;
 fees: number;
 mode: string;
 isActive: boolean;
 trainer: string;
}[]

export interface ibookArr {
 bookId: number;
 title: string;
 author: string;
 price: number;
 pages: number;
 isAvailable: boolean;
 genre: string;
}[]