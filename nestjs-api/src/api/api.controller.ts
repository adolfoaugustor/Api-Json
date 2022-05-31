import { Controller, Get, Param } from '@nestjs/common';
const fs = require('fs')

@Controller('api')
export class ApiController {

   @Get('directors')
   listBoardOfDirectors() {

      try {

         const { boardOfDirectors } = JSON.parse(fs.readFileSync('./struture.json', 'utf8'));
         return boardOfDirectors;

      } catch (error) {
         console.log(`ERROR: ${error}`)
      }
   }

   @Get('supervisors/:id')
   listSupervisors(@Param('id') id: number) {

      try {
         const { supervisors } = JSON.parse(fs.readFileSync('./struture.json', 'utf8'));

         return supervisors.filter(s => s.boardId == id);

      } catch (error) {
         console.log(`ERROR: ${error}`)
      }
   }

   @Get('managers/:id')
   listManagers(@Param('id') id: number) {

      try {
         const { managers } = JSON.parse(fs.readFileSync('./struture.json', 'utf8'));

         return managers.filter(s => s.supervisorId == id);

      } catch (error) {
         console.log(`ERROR: ${error}`)
      }
   }

   @Get('/')
   list() {

      try {

         return JSON.parse(fs.readFileSync('./struture.json', 'utf8'));

      } catch (error) {
         console.log(`ERROR: ${error}`)
      }
   }
}