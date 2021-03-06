package example.staveware.simplemanager.dataset;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Entity
public class Member {
	@Id
	@NotNull(message = "useridが未入力です。")
	private String userid;
	@Pattern(regexp = "^[0-9]{4}-[01]?[0-9]-[0123]?[0-9]$", message = "日付をyyyy-MM-ddで入力してください。")
	private String birthdate;
	private String email;

	public Member() {

	}

	public Member(String userid, String birthdate, String email) {
		this.userid = userid;
		this.setBirthdate(birthdate);
		this.email = email;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(String birthdate) {
		this.birthdate = birthdate;
	}
}
