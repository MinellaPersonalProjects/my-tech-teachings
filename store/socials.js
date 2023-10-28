// Utilities
import { defineStore } from 'pinia'


export const useSocialsStore = defineStore('socials', {
    state: () => ({
        facebook: 'https://www.facebook.com/your-facebook-page',
        youtube: 'https://youtube.com/@NkemEllaMogbo?si=MXmW5yDi8OzhjGv8',
        linkedin: 'https://www.linkedin.com/in/mogbonkem2001',
        twitter: 'https://x.com/ellatheoffice?s=21&t=BMdb0B_nuVz3JkIfgcV4aQ',
        gmail: 'mailto:nmogbo2001@gmail.com',
        github: 'https://github.com/Mogboella',
        resume: '/pdf/resume.pdf'
    }),

    getters: {
        getResumeLocation() {
            return this.resume
        },
    //     openFacebook () {
    //         // Open Facebook link
    //         window.open(this.facebook);
    //     },
    //
    //     openYouTube () {
    //         // Open YouTube link
    //         window.open(this.youtube);
    //     },
    },
    actions: {
    /* Enter Possible Actions Here */
        downloadResume(){
            // Replace 'example.pdf' with the actual filename and path in your public directory
            const pdfPath = this.resume

            // Create a download link and trigger the download
            const link = document.createElement('a');
            link.href = pdfPath;
            link.download = 'MogboNkemResume.pdf'; // Optional: Specify the desired file name
            link.click();
        }
    }

})