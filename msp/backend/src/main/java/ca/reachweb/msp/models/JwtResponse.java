package ca.reachweb.msp.models;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.io.Serializable;
@AllArgsConstructor
@Getter
public class JwtResponse implements Serializable {
    private final String jwttoken;

}
