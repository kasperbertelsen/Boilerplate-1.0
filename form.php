<form id="form" method="POST" action="">
    <div class="form-group">
        <input type="text" name="name" class="form-control" placeholder="Imię i nazwisko" name="name" data-pattern="^[a-zA-ZęóąśłżźćńĘÓĄŚŁŻŹĆŃ -]{3,}$" required>
        <div class="err">Wpisz imię i nazwisko</div>
    </div>
    <div class="form-group">
        <input type="email" name="email" class="form-control" placeholder="E-mail" required>
        <div class="err">Wpisz adres e-mail</div>
    </div>
    <div class="form-group">
        <input type="text" name="company" class="form-control" placeholder="Nazwa firmy" required>
        <div class="err">Wpisz nazwę firmy</div>
    </div>
    <div class="form-group">
        <input type="text" name="phone" class="form-control" placeholder="Numer telefonu" data-pattern="^[0-9+ ]{9,11}$" maxlength="11" required>
        <div class="err">Wpisz numer telefonu</div>
    </div>
    <div class="form-group">
        <input type="text" class="form-control" placeholder="Numer NIP" data-pattern="^[0-9- ]{10,}$" maxlength="13" required>
        <div class="err">Wpisz numer NIP</div>
    </div>
    <div class="form-group">
        <input type="text" class="form-control" placeholder="Numer PESEL" data-pattern="^[0-9]{11}$" required>
        <div class="err">Wpisz numer PESEL</div>
    </div>
    <div class="form-group">
        <div class="checkbox">
            <div>
                <input type="checkbox" required> 
            </div>
            <p class="tt">Amet tempore praesentium voluptatum hic non? Magni maxime tempore placeat</p>
            <div class="err">Zaznacz zgodę</div>
        </div>
    </div>
    <br/>
    <button type="submit" class="btn btn-default">Wyślij</button>
</form>
