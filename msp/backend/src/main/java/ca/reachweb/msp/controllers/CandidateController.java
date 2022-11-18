package ca.reachweb.msp.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/candidate")
public class CandidateController {

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public ResponseEntity<?> getCandidates() {
        return ResponseEntity.ok().body(null);
    }
    @RequestMapping(value = "/uploadResume", method = RequestMethod.POST)
    public ResponseEntity<?> uploadResume() {
        return ResponseEntity.ok().body(null);
    }
}
