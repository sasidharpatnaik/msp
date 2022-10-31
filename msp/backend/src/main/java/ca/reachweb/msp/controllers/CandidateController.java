package ca.reachweb.msp.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CandidateController {

    @RequestMapping(value = "/candidates", method = RequestMethod.GET)
    public ResponseEntity<?> getCandidates() {
        return ResponseEntity.ok().body(null);
    }
}
